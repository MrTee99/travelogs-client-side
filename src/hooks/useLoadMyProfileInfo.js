import { useEffect } from 'react'
import { userActions } from "../store/user_slice/user-slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { localStorageKeys } from '../utils/enums';
import { getMyProfileInfoRequest } from '../api/user-api';

const useLoadMyProfileInfo = () => {
    const dispatch = useDispatch();

    useEffect(() => {    
        const getUserInfo = async (token, cancelRequestTokenSource) => {
          try {
            const response = await getMyProfileInfoRequest(token, cancelRequestTokenSource)
            dispatch(userActions.setUserAndToken({ user: response.data, token: token }))
          }
          catch(error) {
            dispatch(userActions.updateIsUserAuthenticated(false)); 
          }
        }
    
        const token = localStorage.getItem(localStorageKeys.TOKEN)
        const cancelRequestTokenSource = axios.CancelToken.source();
        if(token !== null && token !== "undefined") {
          dispatch(userActions.updateIsUserAuthenticated(true));    // This is done to avoid situation that when we are already logged in and we reloaded the page, then we will see "auth page" because initially I have set isAuthenticated value to false so when we reload, we will see a glance of auth page when data gets loaded but by already making isAuthenticated true by default, we wont see auth page. 
          getUserInfo(token, cancelRequestTokenSource);
        }

        // Cleanup Function
        return () => cancelRequestTokenSource.cancel()
    }, [dispatch])
}

export default useLoadMyProfileInfo;