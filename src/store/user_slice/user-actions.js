// Action Creator function does not return action, instead it returns another function which eventually returns the action
// Used to add asynchronus code (such as fetching data from db) in reducer actions
// Thunk is simply a function that delays an action until something else is finished

// import { userActions } from "./user-slice";
// import * as api from "../../api/user-api";

// export const loginUser = (userCredentials) => {
//     return async (dispatch) => {
//         dispatch(userActions.setIsProcessingRequestAndError([true, ""]))

//         try {
//             const response = await api.loginUserRequest(userCredentials)
//             const user = response.data;
//             dispatch(userActions.setUserAndToken(user));
//         }
//         catch(error) {
//             const errorMessage = (error.response.data) ? error.response.data : ""
//             dispatch(userActions.setError(errorMessage));
//         }
//     }
// }

// const registerUser = (newUser) => {
//     return async (dispatch) => {
//         try {
//             const response = await api.registerUser(newUser);
//             const registeredUser = response.data;
//             dispatch(userActions.registerUser(registeredUser))
//         }
//         catch (error) {
//             console.log(error.message)
//         }
//     }
// }

// export {
//     loginUser,
//     registerUser
// }