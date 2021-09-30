import axios from "axios";

// const baseUrl = "http://localhost:5000/api/posts"
const baseUrl = "https://tahir-nodejs-travelogs-api.herokuapp.com/api/posts"
const getAllPostsOfAllUsersUrl = `${baseUrl}/`
const getSpecificPostUrl = (postID) => `${baseUrl}/${postID}`
const getAllPostsOfSpecificUserUrl = (userID) => `${baseUrl}/user/${userID}`
const createPostUrl = `${baseUrl}/`
const updatePostUrl = (postID) => `${baseUrl}/${postID}`
const deletePostUrl = (postID) => `${baseUrl}/${postID}`
const admirePostUrl = (postID) => `${baseUrl}/${postID}/admire`
const unAdmirePostUrl = (postID) => `${baseUrl}/${postID}/unadmire`

const config = (token, cancelRequestTokenSource) => {
    return { 
        cancelToken: cancelRequestTokenSource.token,
        headers: { Authorization: `Bearer ${token}` }
    }
};

const postConfig = (token, cancelRequestTokenSource) => {
    return { 
        cancelToken: cancelRequestTokenSource.token,
        headers: { 
            Authorization: `Bearer ${token}`, 
            "Content-Type": "multipart/form-data"
        }
    }
};

export const getAllPostsOfAllUsersRequest = (cancelRequestTokenSource) => axios.get(getAllPostsOfAllUsersUrl, config("", cancelRequestTokenSource));
export const getSpecificPostRequest = (cancelRequestTokenSource, postID) => axios.get(getSpecificPostUrl(postID), config("", cancelRequestTokenSource))
export const getAllPostsOfSpecificUserRequest = (cancelRequestTokenSource, userID) => axios.get(getAllPostsOfSpecificUserUrl(userID), config("", cancelRequestTokenSource))

export const createPostRequest = (token, cancelRequestTokenSource, formData) => axios.post(createPostUrl, formData, postConfig(token, cancelRequestTokenSource));
export const updatePostRequest = (token, cancelRequestTokenSource, formData, postID) => axios.patch(updatePostUrl(postID), formData, config(token, cancelRequestTokenSource));
export const deletePostRequest = (token, postID) => axios.delete(deletePostUrl(postID), config(token, ""));

export const admirePostRequest = (token, postID) => axios.post(admirePostUrl(postID), {}, config(token, ""));
export const unAdmirePostRequest = (token, postID) => axios.post(unAdmirePostUrl(postID), {}, config(token, ""));