import { userActions } from "../store/user_slice/user-slice";
import { logoutUserRequest, logoutUserFromAllSessionsRequest } from "../api/user-api";
import { useDispatch, useSelector } from "react-redux";

const useLogout = ({ allSessions }) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user)

    const axiosRequest = (token) => (allSessions) ? logoutUserFromAllSessionsRequest(token) : logoutUserRequest(token);

    const executeRequest = async () => {
        try {
            await axiosRequest(userData.token);
            dispatch(userActions.setToken(""));
            dispatch(userActions.updateIsUserAuthenticated())
        }   
        catch(error) {
            alert(error.response.data);
        }
    }

    return { executeRequest }
}

export default useLogout;