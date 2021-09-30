import React, { useState } from 'react';
import Card from '../../utils/Card';
import NavbarBrand from '../../lib/Top Navbar/NavbarBrand';
import ExpandableSearchBar from '../../lib/Top Navbar/ExpandableSearchBar';
import NavbarProfileBtn from '../../lib/Top Navbar/NavbarProfileBtn';
import NavbarProfileMenu from '../../lib/Top Navbar/NavbarProfileMenu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PrimaryColorNames } from '../../../utils/enums';
import { primaryColorsActions } from '../../../store/primaryColors_slice/primaryColors-slice';
import Logo from '../../icons/Logo';

const TopNavbar = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user)
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    // States
    const [searchThisVal, setSearchThisVal] = useState("");
    const [isHoveringProfileBtn, setIsHoveringProfileBtn] = useState(false);

    // Configuring values fpr Switch Color Btn
    const switchColorArr = [];
    const switchColorFuncArr = [];
    const colorNames = Object.values(PrimaryColorNames);
    colorNames.forEach((colorName) => {
        const switchColorFunc = () => dispatch(primaryColorsActions.switchThemeToThisColor({ color: colorName, isCurrentThemeDark: ThemeStyles.isCurrentThemeDark }))
        switchColorFuncArr.push(switchColorFunc)
        switchColorArr.push(ThemeStyles[colorName]);
    });
 
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    // const profileAndSearchBarSideClasses = (isNavbarOpened) ? ""

    return (
       <nav className={props.className}>
            <Card className="px-3 w-full sm:px-6 py-2 flex items-center">
                <NavbarBrand href="#" className="hidden sm:flex"/>
                {!isNavbarOpened && <Logo Size="42" Fill={PrimaryColorStyles.Color_100} className="block sm:hidden transition-all" />}
                <div className="h-3/4 flex-1 flex justify-end items-center gap-1 md:gap-3">
                    <ExpandableSearchBar searchThis={setSearchThisVal} setIsNavbarOpened={setIsNavbarOpened}/>
                    {!isNavbarOpened && <NavbarProfileBtn Username={userData.user.username} ProfilePic={userData.user.img} setHoveringOverBtn={setIsHoveringProfileBtn}/>}
                </div>
            </Card>
            <NavbarProfileMenu isHoveringProfileBtn={isHoveringProfileBtn} SwitchColor={switchColorArr} SwitchColorFunc={switchColorFuncArr}/>
        </nav>
    )
}

export default TopNavbar
