import React, { useState, useEffect } from 'react'
import Card from '../../utils/Card'
import Button from '../../utils/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import { routerPaths } from '../../../utils/enums';
import useLogout from '../../../hooks/useLogout';

const NavbarProfileMenu = ({ isHoveringProfileBtn, SwitchColor, SwitchColorFunc }) => {
    const { executeRequest: executeLogoutRequest } = useLogout({ allSessions: false });
    const { executeRequest: executeLogoutAllSessionsRequest } = useLogout({ allSessions: true });
    const history = useHistory();
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    // States
    const [OpenMenu, setOpenMenu] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isHoveringOverMenu, setIsHoveringOverMenu] = useState(false);

    // CSS Styles
    const Styles = {
        profileMenuStyle: {
            display: (OpenMenu) ? "block" : "none",
            opacity: (isMenuVisible) ? "100" : "0",
        },
        switchColorHeadingStyle: {
            color: ThemeStyles.HeadingText,
        },
        switchColorBtnStyle: `3px solid ${ThemeStyles.ColorSwitcherBorder}`
    }

    // Color Switch Btn JSX template
    const colorSwitchBtn = (color, onClickFunc) => (
        <button className="rounded-full w-10 h-full transform hover:scale-95 transition-all shadow-md" 
                style={{ backgroundColor: color, border: Styles.switchColorBtnStyle}}
                onClick={onClickFunc} /> 
    )

    // For Showing and hiding Profile Menu when hovering
    useEffect(() => {
        if((isHoveringProfileBtn || isHoveringOverMenu) && (!OpenMenu || !isMenuVisible)) {
            if(!OpenMenu) setOpenMenu(true);
            if(!isMenuVisible) setIsMenuVisible(true);
        }

        if (!isHoveringProfileBtn && !isHoveringOverMenu && OpenMenu) {
            if (isMenuVisible) setTimeout(() => setIsMenuVisible(false), 300);
            else if (!isMenuVisible) setTimeout(() => setOpenMenu(false), 200);
        }

    }, [isHoveringProfileBtn, OpenMenu, isMenuVisible, isHoveringOverMenu])

    const handleLogout = () => executeLogoutRequest();
    const handleLogoutAllSessions = () => executeLogoutAllSessionsRequest();
    const handleViewProfile = () => history.push({ pathname: routerPaths.PROFILE, });

    return (
        <Card className="w-64 p-4 float-right m-3 rounded-lg transition duration-200 ease-linear" style={Styles.profileMenuStyle}
              onMouseEnter={setIsHoveringOverMenu.bind(null, true)} onMouseLeave={setIsHoveringOverMenu.bind(null, false)}>

            <h3 className="text-lg font-bold" style={Styles.switchColorHeadingStyle}>Color Switch</h3>
            <div className="mt-2 w-full h-10 flex gap-2">
                {colorSwitchBtn(SwitchColor[0], SwitchColorFunc[0])}
                {colorSwitchBtn(SwitchColor[1], SwitchColorFunc[1])}
                {colorSwitchBtn(SwitchColor[2], SwitchColorFunc[2])}
                {colorSwitchBtn(SwitchColor[3], SwitchColorFunc[3])}
                {colorSwitchBtn(SwitchColor[4], SwitchColorFunc[4])}
            </div>

            <Button className="mt-4 w-full text-lg"    handleOnClick={handleLogout}             BGcolor={ThemeStyles.ButtonBG_Elevation_Level_01} HoverBGcolor={ThemeStyles.ButtonHoverBG_Elevation_Level_01} FGcolor={ThemeStyles.ButtonText_Elevation_Level_01}>   Logout                    </Button>
            <Button className="mt-2.5 w-full text-lg"  handleOnClick={handleLogoutAllSessions}  BGcolor={ThemeStyles.ButtonBG_Elevation_Level_01} HoverBGcolor={ThemeStyles.ButtonHoverBG_Elevation_Level_01} FGcolor={ThemeStyles.ButtonText_Elevation_Level_01}>   Logout All Sessions  </Button>
            <Button className="mt-2.5 w-full text-xl"  handleOnClick={handleViewProfile}        BGcolor={PrimaryColorStyles.Color_100}            HoverBGcolor={PrimaryColorStyles.Color_200}                 FGcolor={ThemeStyles.CardBG_Elevation_Level_01}>       View Profile              </Button>
        </Card>
    )
}

export default NavbarProfileMenu
