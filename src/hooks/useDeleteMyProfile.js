import { useDispatch, useSelector } from 'react-redux'
import { deleteMyProfileRequest } from '../api/user-api';
import { userActions } from '../store/user_slice/user-slice';

const useDeleteMyProfile = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user)

    const executeRequest = async () => {
        try {
            await deleteMyProfileRequest(userData.token);
            dispatch(userActions.resetUser());
        }   
        catch(error) {
            alert(error.response.data);
        }
    }

    return { executeRequest }
}

export default useDeleteMyProfile;