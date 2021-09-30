import { localStorageKeys, PrimaryColorNames } from "../../utils/enums"

const primaryColor = localStorage.getItem(localStorageKeys.PRIMARY_COLOR) 
const defaultSelectedPrimaryColor = (primaryColor !== null && primaryColor !== "undefined") ? primaryColor : PrimaryColorNames.PURPLE;

export const DarkThemeYellow = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#FFC68A", Color_200: "#FFDCB7", Color_300: "#FFF2E2"  }
export const LightThemeYellow = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#FFAF5F", Color_200: "#FE9E44", Color_300: "#FD8E32"  }

export const DarkThemeGreen = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#83DEC4", Color_200: "#B5EADB", Color_300: "#E1F7F1"  }
export const LightThemeGreen = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#4ACFAC", Color_200: "#01C29A", Color_300: "#00B589"  }

export const DarkThemePurple = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#A4ADE9", Color_200: "#C8CDF2", Color_300: "#E9EBFA"  }
export const LightThemePurple = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#7E8CE0", Color_200: "#6171D9", Color_300: "#4657CE"  }

export const DarkThemeBlue = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#84DFE2", Color_200: "#B3ECED", Color_300: "#E0F7F8"  }
export const LightThemeBlue = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#55D1D8", Color_200: "#36C7D0", Color_300: "#21BDCA"  }

export const DarkThemePeach = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#FFA48E", Color_200: "#FFC8BA", Color_300: "#FBE8E6"  }
export const LightThemePeach = { selectedPrimaryColor: defaultSelectedPrimaryColor, Color_100: "#FFA48E", Color_200: "#FE8062", Color_300: "#FD6341"  }

export const AllDarkThemeMainColor = {
    yellow: DarkThemeYellow.Color_100,
    green: DarkThemeGreen.Color_100,
    purple: DarkThemePurple.Color_100,
    blue: DarkThemeBlue.Color_100,
    peach: DarkThemePeach.Color_100,
} 

export const AllLightThemeMainColor = {
    yellow: LightThemeYellow.Color_100,
    green: LightThemeGreen.Color_100,
    purple: LightThemePurple.Color_100,
    blue: LightThemeBlue.Color_100,
    peach: LightThemePeach.Color_100,
}