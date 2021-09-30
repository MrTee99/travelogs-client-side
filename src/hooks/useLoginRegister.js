import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import axios from 'axios'
import { userActions } from '../store/user_slice/user-slice';
import { loginUserRequest, registerUserRequest } from '../api/user-api';

const useLoginRegister = ({ performingLogin, formData, setError, noErrorState, validationFunc, errorCodeMessage} ) => {
    const dispatch = useDispatch();

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
        const axiosRequest = () => (performingLogin) ? loginUserRequest(formData, cancelRequestTokenSource) : registerUserRequest(formData, cancelRequestTokenSource);

        const apiFunc = async () => {
            try {
                const response = await axiosRequest()
                const user = response.data;
                dispatch(userActions.setUserAndToken(user));

                setIsProcessingData(false);
                setIsSubmittingData(false);
                setIsRequestExecutedSuccessfully(true);

                dispatch(userActions.updateIsUserAuthenticated())       // This will update isAuthenticated value to true and then automatically redirect to timeline because of the conditional statements setup in App.js Switch Route
            }
            catch(error) {
                if(error.response && error.response.data !== "") {
                    if(errorCodeMessage && error.response.data.code === errorCodeMessage.code) errorCodeMessage.setError();
                    else alert(error.response.data)
                }

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
    }, [isSubmittingData, dispatch, errorCodeMessage, formData, performingLogin])

    return { isProcessingData, setIsProcessingData, executeRequest, isRequestExecutedSuccessfully }
}

export default useLoginRegister;