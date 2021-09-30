import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import { routerPaths } from '../utils/enums';

import axios from 'axios'
import { createPostRequest, updatePostRequest } from '../api/post-api';

const useCreateAndUpdatePost = ({ formData, setError, noErrorState, validationFunc, isUpdating, errorCodeMessage }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userData = useSelector((state) => state.user)

    const [isRequestExecutedSuccessfully, setIsRequestExecutedSuccessfully] = useState(false)
    const [isProcessingData, setIsProcessingData] = useState(false);
    const [isSubmittingData, setIsSubmittingData] = useState(false);

    const executeRequest = async () => {
        setIsProcessingData(true);
        setError(noErrorState);
        
        const error = validationFunc();  
        
        if(JSON.stringify(error) !== JSON.stringify(noErrorState)) {
            await setTimeout(() => {
                setError(error)
                setIsProcessingData(false);
            }, 200)
            return
        }
        
        setIsSubmittingData(true);
    }

    useEffect(() => {
        const cancelRequestTokenSource = axios.CancelToken.source();

        const apiFunc = async () => {
            try {
                const axiosRequest = (bodyFormData) => {
                    console.log(!!isUpdating)
                    if(!!isUpdating) return updatePostRequest(userData.token, cancelRequestTokenSource, bodyFormData, formData._id);
                    return createPostRequest(userData.token, cancelRequestTokenSource, bodyFormData);
                }

                const bodyFormData = new FormData();
                const { img, ...data } = formData
                delete data["_id"]
                bodyFormData.append('data', JSON.stringify({ ...data }));
                if((isUpdating && isUpdating.img !== img) || !isUpdating) bodyFormData.append('img', img);

                const response = await axiosRequest(bodyFormData)

                setIsProcessingData(false);
                setIsSubmittingData(false);
                setIsRequestExecutedSuccessfully(true);

                if(isUpdating) history.go(0)    // refresh page
                else history.replace({ pathname: routerPaths.TIMELINE });

            }
            catch(error) {
                if(error.response) alert(error.response.status + ": " + error.response.statusText)
                // if(error.response.data !== "") {
                //     if(errorCodeMessage && error.response.data.code === errorCodeMessage.code) errorCodeMessage.setError();
                //     else alert(error.response.data)
                // }

                setIsProcessingData(false);
                setIsSubmittingData(false);
                setIsRequestExecutedSuccessfully(false);
            }
        }
      
        if(isSubmittingData) {
            apiFunc();
        }

        // Cleanup Function
        return () => cancelRequestTokenSource.cancel()
    }, [isSubmittingData, dispatch, errorCodeMessage, formData])

    return { isProcessingData, setIsProcessingData, executeRequest, isRequestExecutedSuccessfully }
}

export default useCreateAndUpdatePost;