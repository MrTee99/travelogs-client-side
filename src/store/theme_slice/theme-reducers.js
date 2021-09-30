import { DarkTheme, LightTheme } from "./theme-values";
import { localStorageKeys } from "../../utils/enums";

const toggleTheme = (state, action) => {
    if(state.isCurrentThemeDark) {
        localStorage.setItem(localStorageKeys.IS_DARK_THEME, false);
        return LightTheme
    }
    else {
        localStorage.setItem(localStorageKeys.IS_DARK_THEME, true);
        return DarkTheme
    }
}

export {
    toggleTheme
}