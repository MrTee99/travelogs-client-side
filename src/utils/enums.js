
const userDataInitialVal = {
    createdAt: "date",
    profile_pic: "",
    totalFollowers: 0,
    totalPosts: 0,
    totalAdmirers: 0,
    updatedAt: "date",
    username: "username",
    _id: "id",
}

const PrimaryColorNames = {
    YELLOW: "yellow",
    GREEN: "green",
    PURPLE: "purple",
    BLUE: "blue",
    PEACH: "peach",
}

const localStorageKeys = {
    TOKEN: "token",
    IS_DARK_THEME: "isDarkTheme",
    PRIMARY_COLOR: "primaryColor",
}

const routerPaths = {
    AUTH: "/auth",
    TIMELINE: "/timeline",
    PROFILE: "/profile",
    CREATE: "/create",
}

const sidebarBtnNames = {
    BACK: "Back",
    HOME: "Home",
    PROFILE: "Profile",
    CREATE: "Create",
    THEME: "Theme"
}

export {
    userDataInitialVal,
    localStorageKeys,
    routerPaths,
    sidebarBtnNames,
    PrimaryColorNames
}