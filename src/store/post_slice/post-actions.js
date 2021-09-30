// Action Creator function does not return action, instead it returns another function which eventually returns the action
// Used to add asynchronus code (such as fetching data from db) in reducer actions
// Thunk is simply a function that delays an action until something else is finished

// import { postActions } from "./post-slice";
// import * as api from "../../api/post-api";

// const getPosts = () => {
//     return async (dispatch) => {
//         try {
//             const response = await api.fetchPosts()
//             const posts = response.data;
//             dispatch(postActions.fetchAllPosts(posts));
//         }
//         catch(error) {
//             console.log(error.message)
//         }

//     }
// }

// const addNewPost = (newPost) => {
//     return async (dispatch) => {
//         try {
//             const response = await api.createPost(newPost);
//             const createdPost = response.data;
//             dispatch(postActions.createPost(createdPost))
//         }
//         catch (error) {
//             console.log(error.message)
//         }
//     }
// }

// export {
//     getPosts,
//     addNewPost
// }