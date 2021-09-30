import { current } from "@reduxjs/toolkit"

const showBackBtn = (state, action) => {
    return { ...current(state), displayBackButton: true }    
}

const pressBackButton = (state, action) => {
    return { ...current(state), displayBackButton: false }    
}

export {
    showBackBtn,
    pressBackButton
}