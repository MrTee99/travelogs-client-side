import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import axios from 'axios'
import { postActions } from '../store/post_slice/post-slice';
import { getAllPostsOfAllUsersRequest, getAllPostsOfSpecificUserRequest } from '../api/post-api';

const useGetPosts = ({ userID }) => {
    const dispatch = useDispatch();

    const [isRequestExecutedSuccessfully, setIsRequestExecutedSuccessfully] = useState(false)
    const [isProcessingData, setIsProcessingData] = useState(false);
    const [error, setError] = useState("");

    const executeRequest = () => {
        dispatch(postActions.resetPosts())
        setIsProcessingData(true);
    }

    useEffect(() => {
        const cancelRequestTokenSource = axios.CancelToken.source();
        const axiosRequest = () => (userID) ? getAllPostsOfSpecificUserRequest(cancelRequestTokenSource, userID) : getAllPostsOfAllUsersRequest(cancelRequestTokenSource)

        const apiFunc = async () => {
            try {
                const response = await axiosRequest()
                dispatch(postActions.fetchPosts(response.data));
                setIsProcessingData(false);
                setIsRequestExecutedSuccessfully(true);
            }
            catch(err) {
                if(err.response) setError(err.response.status + ": " + err.response.statusText)
                setIsProcessingData(false);
                setIsRequestExecutedSuccessfully(true);
            }
        }
      
        if(isProcessingData) {
            apiFunc();
        }

        // Cleanup Function
        return () => cancelRequestTokenSource.cancel()
    }, [isProcessingData, dispatch])

    return { isProcessingData, error, executeRequest, isRequestExecutedSuccessfully }
}

export default useGetPosts;