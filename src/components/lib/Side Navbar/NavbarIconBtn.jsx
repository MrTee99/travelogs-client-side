import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { sidebarBtnNames } from '../../../utils/enums';

const NavbarIconBtn = ({ Name, Icon, isSelected, setIsSelected, onClick, setIsHoveringOver, ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    // States
    const [isHovering, setIsHovering] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(0);

    // CSS Styles
    const Styles = {
        iconFill: {
            // fill: (isHovering || isSelected === Name) ? PrimaryColorStyles.Color_100 : ThemeStyles.SideNavIconFill,
            // opacity: (isHovering && isSelected !== Name) ? "0.5" : "1",
            fill: (isSelected === Name) ? PrimaryColorStyles.Color_100 : ThemeStyles.SideNavIconFill,
            transform: (isButtonClicked === 1) ? "scale(0)" : (isButtonClicked === 2) ? "scale(1.6)" : (isHovering) ? "scale(1.25)" : "scale(1)",
        }
    }

    // Hover Handler Func
    const handleHovering = (bool) => {
        if(bool === true) setIsHoveringOver(Name)
        else setIsHoveringOver("")

        setIsHovering(bool)
    }

    // Handle Click Effects + Animations when click on Icon Btns 
    const handleOnClick = () => {
        onClick();
        setIsButtonClicked(1);
        setTimeout(() => setIsButtonClicked(2), 220);
        setTimeout(() => setIsButtonClicked(0), 440);
    }

    const iconSize = (Name === sidebarBtnNames.THEME) ? "27" : "30";

    return (
        <Icon Size={iconSize} className="cursor-pointer transition duration-200 ease-linear transform" 
              style={Styles.iconFill} onClick={handleOnClick}
              onMouseEnter={handleHovering.bind(null, true)} onMouseLeave={handleHovering.bind(null, false)}/> 
    )
}

export default NavbarIconBtn
