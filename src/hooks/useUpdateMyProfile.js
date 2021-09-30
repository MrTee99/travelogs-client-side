import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'

import axios from 'axios'
import { userActions } from '../store/user_slice/user-slice';
import { updateMyProfileInfoRequest } from '../api/user-api';

const useUpdateMyProfile = ({ prevformData, newFromData, setError, noErrorState, validationFunc, errorCodeMessage }) => {
    const history = useHistory();
    const dispatch = useDispatch();
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
                const bodyFormData = new FormData();
                const { img, ...data } = newFromData
                bodyFormData.append('data', JSON.stringify({ ...data }));
                if(prevformData.img !== img) bodyFormData.append('img', img);

                const response = await updateMyProfileInfoRequest(userData.token, cancelRequestTokenSource, bodyFormData);
                dispatch(userActions.setUser(response.data));

                setIsProcessingData(false);
                setIsSubmittingData(false);
                setIsRequestExecutedSuccessfully(true);

                history.go(0)    // refresh page
            }
            catch(error) {
                if(error.response) alert(error.response.status + ": " + error.response.statusText)
                // if(error.response && error.response.data !== "") {
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
    }, [isSubmittingData, dispatch, errorCodeMessage, newFromData])

    return { isProcessingData, setIsProcessingData, executeRequest, isRequestExecutedSuccessfully }
}

export default useUpdateMyProfile;