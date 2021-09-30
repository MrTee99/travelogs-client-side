import axios from 'axios';

const baseUrl = "http://localhost:5000/api/users"
const loginUrl = `${baseUrl}/login`
const registerUrl = `${baseUrl}/register`
const logoutUrl = `${baseUrl}/logout`
const logoutFromAllSessionsUrl = `${baseUrl}/logout/allSessions`
const getMyProfileInfoUrl = `${baseUrl}/`
const updateMyProfileInfoUrl = `${baseUrl}/`
const deleteMyProfileUrl = `${baseUrl}/`

const config = (token, cancelRequestTokenSource) => {
    return { 
        cancelToken: cancelRequestTokenSource.token,
        headers: { Authorization: `Bearer ${token}` }
    }
};

const updateUserConfig = (token, cancelRequestTokenSource) => {
    return { 
        cancelToken: cancelRequestTokenSource.token,
        headers: { 
            Authorization: `Bearer ${token}`, 
            "Content-Type": "multipart/form-data"
        }
    }
};

export const loginUserRequest = (userCredentials, cancelRequestTokenSource) => axios.post(loginUrl, userCredentials, config("", cancelRequestTokenSource));
export const registerUserRequest = (newUser, cancelRequestTokenSource) => axios.post(registerUrl, newUser, config("", cancelRequestTokenSource))

export const logoutUserRequest = (token) => axios.post(logoutUrl, {}, config(token, ""))
export const logoutUserFromAllSessionsRequest = (token) => axios.post(logoutFromAllSessionsUrl, {}, config(token, ""))

export const getMyProfileInfoRequest = (token, cancelRequestTokenSource) => axios.get(getMyProfileInfoUrl, config(token, cancelRequestTokenSource))
export const updateMyProfileInfoRequest = (token, cancelRequestTokenSource, updatedUser) => axios.patch(updateMyProfileInfoUrl, updatedUser, updateUserConfig(token, cancelRequestTokenSource))
export const deleteMyProfileRequest = (token) => axios.delete(deleteMyProfileUrl, config(token, ""));