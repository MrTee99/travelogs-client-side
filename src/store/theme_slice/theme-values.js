import { AllDarkThemeMainColor, AllLightThemeMainColor } from "../primaryColors_slice/primaryColors-values"

export const DarkTheme = {
    isCurrentThemeDark: true,
    ...AllDarkThemeMainColor,

    Background: "#5d5d5d",
    Scrollbar: "#6f6f6f",
    ScrollbarHover: "#7d7d7d",
    CardBG_Elevation_Level_01: "#4B4B4B",
    CardBG_Elevation_Level_02: "#595959",
    CardBG_Elevation_Level_03: "#7a7a7a",
    CardShadow: "0px 1px 4px 0px rgba(0,0,0, 0.6)",
    HeadingText: "#FFFFFF",
    SubHeadingText: "#e6e6e6",
    Text: "#cccccc",
    SearchInputText: "#FFFFFF",
    SearchInputDivider: "#7c7c7c",
    SearchInputCrossIcon: "#7c7c7c",
    InputBorder: "#9CA3AF",
    InputText: "#FFFFFF", 
    ButtonBG_Elevation_Level_01: "#595959",
    ButtonHoverBG_Elevation_Level_01: "#7a7a7a",
    ButtonText_Elevation_Level_01: "#FFFFFF",
    ColorSwitcherBorder: "#FFFFFF",
    SideNavIconFill: "#656565",
    SideNavbarTooltipText: "#FFFFFF",
}

export const LightTheme = {
    isCurrentThemeDark: false,
    ...AllLightThemeMainColor,

    Background: "#F0F2F5",
    Scrollbar: "#c0c2c4",
    ScrollbarHover: "#adafb0",
    CardBG_Elevation_Level_01: "#FFFFFF",
    CardBG_Elevation_Level_02: "#f5f5f5",
    CardBG_Elevation_Level_03: "#dddddd",
    CardShadow: "0px 1px 4px 0px rgba(140, 147, 157, 0.6)",
    HeadingText: "#8C939D",
    SubHeadingText: "#7e848d",
    Text: "70767e",
    SearchInputDivider: "#b6b8ba",
    SearchInputCrossIcon: "#b6b8ba",
    SearchInputText: "#8C939D",
    InputBorder: "#9CA3AF",
    InputText: "#000000",
    ButtonBG_Elevation_Level_01: "#F1F2F6",
    ButtonHoverBG_Elevation_Level_01: "#e6e6e8",
    ButtonText_Elevation_Level_01: "#8C939D",
    ColorSwitcherBorder: "#8C939D",
    SideNavIconFill: "#D7D9DD",
    SideNavbarTooltipText: "#FFFFFF"
}