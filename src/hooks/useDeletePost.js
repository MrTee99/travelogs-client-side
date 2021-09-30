import { deletePostRequest } from "../api/post-api";
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux';

const useDeletePost = (postID) => {
    const history = useHistory();
    const userData = useSelector((state) => state.user)

    const executeRequest = async () => {
        try {
            await deletePostRequest(userData.token, postID);
            history.go(0)    // refresh page
        }   
        catch(error) {
            alert(error.response.data);
        }
    }

    return { executeRequest }
}

export default useDeletePost;