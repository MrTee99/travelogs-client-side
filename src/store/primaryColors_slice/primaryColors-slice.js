import { createSlice } from "@reduxjs/toolkit";
import { DarkThemeYellow, DarkThemeGreen, DarkThemePurple, DarkThemeBlue, DarkThemePeach } from "./primaryColors-values"
import { LightThemeYellow, LightThemeGreen, LightThemePurple, LightThemeBlue, LightThemePeach } from "./primaryColors-values"
import { switchThemeToThisColor } from "./primaryColors-reducers";
import { localStorageKeys, PrimaryColorNames } from "../../utils/enums"

let intialState;
const isDarkTheme = localStorage.getItem(localStorageKeys.IS_DARK_THEME)
const primaryColor = localStorage.getItem(localStorageKeys.PRIMARY_COLOR)

if (isDarkTheme === "false") {
    if(primaryColor === PrimaryColorNames.YELLOW) intialState =  { ...LightThemeYellow }
    else if(primaryColor === PrimaryColorNames.GREEN) intialState =  { ...LightThemeGreen }
    else if(primaryColor === PrimaryColorNames.PURPLE) intialState =  { ...LightThemePurple }
    else if(primaryColor === PrimaryColorNames.BLUE) intialState =  { ...LightThemeBlue }
    else if(primaryColor === PrimaryColorNames.PEACH) intialState =  { ...LightThemePeach }
    else intialState =  { ...LightThemePurple }
}
else {
    if(primaryColor === PrimaryColorNames.YELLOW) intialState =  { ...DarkThemeYellow }
    else if(primaryColor === PrimaryColorNames.GREEN) intialState =  { ...DarkThemeGreen }
    else if(primaryColor === PrimaryColorNames.PURPLE) intialState =  { ...DarkThemePurple }
    else if(primaryColor === PrimaryColorNames.BLUE) intialState =  { ...DarkThemeBlue }
    else if(primaryColor === PrimaryColorNames.PEACH) intialState =  { ...DarkThemePeach }
    else intialState =  { ...DarkThemePurple }
}

const primaryColorsSlice = createSlice({
    name: "primaryColors",
    initialState: intialState,
    reducers: {
        switchThemeToThisColor
    }
});

export const primaryColorsActions = primaryColorsSlice.actions;
export default primaryColorsSlice;