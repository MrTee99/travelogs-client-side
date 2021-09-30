import { localStorageKeys, PrimaryColorNames } from "../../utils/enums";
import { DarkThemeYellow, DarkThemeGreen, DarkThemePurple, DarkThemeBlue, DarkThemePeach } from "./primaryColors-values"
import { LightThemeYellow, LightThemeGreen, LightThemePurple, LightThemeBlue, LightThemePeach } from "./primaryColors-values"

const switchThemeToThisColor = (state, action) => {
    if(action.payload.color === state.selectedPrimaryColor && !action.payload.invertedDarkLightTheme) return;

    switch (action.payload.color) {
        case PrimaryColorNames.YELLOW:
            localStorage.setItem(localStorageKeys.PRIMARY_COLOR, PrimaryColorNames.YELLOW) 
            if(action.payload.isCurrentThemeDark) return changeColor(DarkThemeYellow, action.payload.color)
            else return changeColor(LightThemeYellow, action.payload.color)
        case PrimaryColorNames.GREEN:
            localStorage.setItem(localStorageKeys.PRIMARY_COLOR, PrimaryColorNames.GREEN) 
            if(action.payload.isCurrentThemeDark) return changeColor(DarkThemeGreen, action.payload.color)
            else return changeColor(LightThemeGreen, action.payload.color)
        case PrimaryColorNames.PURPLE:
            localStorage.setItem(localStorageKeys.PRIMARY_COLOR, PrimaryColorNames.PURPLE) 
            if(action.payload.isCurrentThemeDark) return changeColor(DarkThemePurple, action.payload.color)
            else return changeColor(LightThemePurple, action.payload.color)
        case PrimaryColorNames.BLUE:
            localStorage.setItem(localStorageKeys.PRIMARY_COLOR, PrimaryColorNames.BLUE) 
            if(action.payload.isCurrentThemeDark) return changeColor(DarkThemeBlue, action.payload.color)
            else return changeColor(LightThemeBlue, action.payload.color)
        default:
            localStorage.setItem(localStorageKeys.PRIMARY_COLOR, PrimaryColorNames.PEACH) 
            if(action.payload.isCurrentThemeDark) return changeColor(DarkThemePeach, action.payload.color)
            else return changeColor(LightThemePeach, action.payload.color)  
    }
}

const changeColor = (ColorObj, selectedColor) => {
    delete ColorObj["selectedPrimaryColor"]; 
    return {selectedPrimaryColor: selectedColor, ...ColorObj};
}

export {
    switchThemeToThisColor
}