import React, { useState, useEffect } from 'react'
import Card from '../../utils/Card'
import { useSelector } from 'react-redux';

const NavbarIconBtnHover = ({ Name, isHoveringOver, ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    // States
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    // CSS Styles
    const CustomBG = (!ThemeStyles.isCurrentThemeDark) ? PrimaryColorStyles.Color_100 : "";
    const newHoverDisplayStyle = (display) => hoverStyle = { ...hoverStyle, display: display }
    let hoverStyle = {
        display: "flex",
        opacity: (isTooltipVisible) ? "100" : "0",
        marginTop: props.MarginTop
    }

    // Handle Show and Hide Tooltip
    useEffect(() => {
        if(isHoveringOver === Name && !isTooltipVisible) {
            newHoverDisplayStyle("flex")
            setIsTooltipVisible(true);
        }

        if(isHoveringOver !== Name && isTooltipVisible) {
            setIsTooltipVisible(false);
            setTimeout(() =>  newHoverDisplayStyle("none"), 500)
        }
    }, [isHoveringOver, isTooltipVisible, Name, newHoverDisplayStyle])

    return (
        <div className="transition duration-200 ease-linear" style={hoverStyle}>
            <Card className="px-3 py-1.5 inline rounded-md text-center" CustomBG={CustomBG}>
                {props.children}
            </Card>
        </div>
    )
}

export default NavbarIconBtnHover
