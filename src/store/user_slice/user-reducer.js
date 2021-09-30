import { current } from "@reduxjs/toolkit"
import { localStorageKeys } from "../../utils/enums"

const resetUser = (state, action) => {
    localStorage.clear()
    return { ...current(state), isAuthenticated: false }    
}

const setToken = (state, action) => { 
    localStorage.setItem(localStorageKeys.TOKEN, action.payload.token)
    return { ...current(state), token: action.payload.token } 
}

const setUser = (state, action) => { 
    return { ...current(state), user: action.payload } 
}

const updateIsUserAuthenticated = (state, action) => { 
    const currentState = current(state)
    if(action.payload) return { ...currentState, isAuthenticated: action.payload, } 
    return { ...currentState, isAuthenticated: !!currentState.token, } 
}

const setUserAndToken = (state, action) => { 
    localStorage.setItem(localStorageKeys.TOKEN, action.payload.token)
    return { ...current(state), ...action.payload }
}

export {
    resetUser,
    setToken, 
    setUser, 
    updateIsUserAuthenticated,
    setUserAndToken,
}