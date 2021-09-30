import React, { useState, useEffect } from 'react'
import Card from '../../utils/Card'
import NavbarIconBtn from '../../lib/Side Navbar/NavbarIconBtn'
import NavbarIconBtnHover from '../../lib/Side Navbar/NavbarIconBtnHover'
import TimelineIcon from '../../icons/TimelineIcon'
import ProfileIcon from '../../icons/ProfileIcon'
import CreateIcon from '../../icons/CreateIcon'
import MoonIcon from '../../icons/MoonIcon'
import SunIcon from '../../icons/SunIcon'
import { useDispatch } from 'react-redux'
import { themeActions } from '../../../store/theme_slice/theme-slice'
import { primaryColorsActions } from '../../../store/primaryColors_slice/primaryColors-slice';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { routerPaths, sidebarBtnNames } from '../../../utils/enums';
import { uiActions } from '../../../store/ui_slice/ui-slice'
import GoBackIcon from '../../icons/GoBackIcon'

const SideNavbar = ({ ...props }) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    const uiData = useSelector((state) => state.ui);

    // States
    const [isSelected, setIsSelected] = useState(sidebarBtnNames.HOME);
    const [isHoveringOver, setIsHoveringOver] = useState("");  

    useEffect(() => {
        if(location.pathname === routerPaths.TIMELINE) setIsSelected(sidebarBtnNames.HOME)
        else if (location.pathname === routerPaths.PROFILE) setIsSelected(sidebarBtnNames.PROFILE)
        else if(location.pathname === routerPaths.CREATE) setIsSelected(sidebarBtnNames.CREATE)

    }, [location])
    
    // Configuring Theme Change Icon Btn
    const ThemeIcon = (ThemeStyles.isCurrentThemeDark) ? SunIcon : MoonIcon;
    const ThemeIconHoverText = (ThemeStyles.isCurrentThemeDark) ? "Light Mode" : "Dark Mode";
    const ThemeIconOnClick = () => {
        dispatch(primaryColorsActions.switchThemeToThisColor({ color: PrimaryColorStyles.selectedPrimaryColor, isCurrentThemeDark: !ThemeStyles.isCurrentThemeDark, invertedDarkLightTheme: true }))
        dispatch(themeActions.toggleTheme())
    }

    // Configuring Other Icon Btns
    const IconOnClick = (Name) => {
        dispatch(uiActions.pressBackButton());
        setIsSelected(Name);
        if(Name === sidebarBtnNames.HOME) history.push({ pathname: routerPaths.TIMELINE, });
        else if(Name === sidebarBtnNames.PROFILE) history.push({ pathname: routerPaths.PROFILE, });
        else if(Name === sidebarBtnNames.CREATE) history.push({ pathname: routerPaths.CREATE, });
    }

    // CSS Styles
    const hoverTooltipTextStyle = { 
        color: ThemeStyles.SideNavbarTooltipText,
        fontWeight: "500",
        transition: "all 200ms linear",
        lineHeight: "0.8",
        userSelect: "none"
    }

    return (
        <nav className={`flex flex-row px-3 py-3 ${props.className}`} style={props.style}>
            <Card className="w-full h-16 md:w-16 md:h-full rounded-lg px-2 py-8 flex justify-between items-center flex-col">

                {/* Home, Profile & Create Icon Btns */}
                <div className="w-full h-full md:h-auto flex justify-around md:justify-start flex-row md:flex-col gap-0 md:gap-10">
                    {uiData.displayBackButton && <div className="h-full md:w-full flex items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.BACK} Icon={GoBackIcon} onClick={IconOnClick.bind(null, isSelected)}
                                       isSelected={isSelected} setIsHoveringOver={setIsHoveringOver}/>
                    </div>}
                    <div className="h-full md:w-full flex items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.HOME} Icon={TimelineIcon} onClick={IconOnClick.bind(null, sidebarBtnNames.HOME)}
                                       isSelected={isSelected} setIsHoveringOver={setIsHoveringOver}/>
                    </div>
                    <div className="h-full md:w-full flex items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.PROFILE} Icon={ProfileIcon} onClick={IconOnClick.bind(null, sidebarBtnNames.PROFILE)}
                                       isSelected={isSelected} setIsHoveringOver={setIsHoveringOver} />
                    </div>
                    <div className="h-full md:w-full flex items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.CREATE} Icon={CreateIcon} onClick={IconOnClick.bind(null, sidebarBtnNames.CREATE)}
                                       isSelected={isSelected} setIsHoveringOver={setIsHoveringOver} />
                    </div>
                    <div className="h-full flex md:hidden items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.THEME} Icon={ThemeIcon} onClick={ThemeIconOnClick} isChangeThemeBtn
                                       isSelected={isSelected} setIsSelected={setIsSelected} setIsHoveringOver={setIsHoveringOver} />
                    </div>
                </div>

                {/* Theme Change Icon Btn */}
                <div className="flex-1 w-full hidden md:flex items-end ">
                    <div className="w-full flex items-center justify-center">
                        <NavbarIconBtn Name={sidebarBtnNames.THEME} Icon={ThemeIcon} onClick={ThemeIconOnClick} isChangeThemeBtn
                                       isSelected={isSelected} setIsSelected={setIsSelected} setIsHoveringOver={setIsHoveringOver} />
                    </div>
                </div>
            </Card>
            {/* <div className="ml-3 pt-7 pb-5 flex flex-col"> */}

                {/* Home, Profile & Create Tooltips */}
                {/* <div className="flex-1 justify-start">
                    <NavbarIconBtnHover Name={sidebarBtnNames.HOME} isHoveringOver={isHoveringOver}> <span style={hoverTooltipTextStyle}>Home</span> </NavbarIconBtnHover>
                    <NavbarIconBtnHover Name={sidebarBtnNames.PROFILE} MarginTop="2.1rem" isHoveringOver={isHoveringOver}> <span style={hoverTooltipTextStyle}>Profile</span> </NavbarIconBtnHover>
                    <NavbarIconBtnHover Name={sidebarBtnNames.CREATE} MarginTop="1.35rem" isHoveringOver={isHoveringOver}>
                        <span style={hoverTooltipTextStyle}>Create new</span>
                        <span className="block pb-1" style={hoverTooltipTextStyle}>Travel Log</span>
                    </NavbarIconBtnHover>
                </div> */}

                {/* Theme Change Tooltip */}
                {/* <div className="justify-end">
                    <NavbarIconBtnHover Name={sidebarBtnNames.THEME} isHoveringOver={isHoveringOver}>
                        <span style={hoverTooltipTextStyle}>Switch To</span>
                        <span className="block pb-1" style={hoverTooltipTextStyle}>{ThemeIconHoverText}</span>
                    </NavbarIconBtnHover>
                </div>
            </div> */}
        </nav>
    )
}

export default SideNavbar
