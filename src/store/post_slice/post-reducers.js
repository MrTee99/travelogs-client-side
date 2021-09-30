const resetPosts = (state, action) => {
    return { posts: [] };
}

const fetchPosts = (state, action) => {
    return { posts: [ ...action.payload ] };
}

export {
    resetPosts,
    fetchPosts
}