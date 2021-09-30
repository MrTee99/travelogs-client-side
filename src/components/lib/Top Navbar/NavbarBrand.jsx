import React from 'react';
// import propTypes from "prop-types";
import Logo from "../../icons/Logo";
import { useSelector } from 'react-redux';

const NavbarBrand = ({ href, Large, Medium, ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    // CSS Styles
    const LogoTextStyle = {
        color: (ThemeStyles.isCurrentThemeDark) ? ThemeStyles.HeadingText : PrimaryColorStyles.Color_100,
        fontSize: (Large) ? "5rem" : (Medium) ? "3.75rem" : "2.5rem"
    }

    // Declaring Logo Size Options
    const LogoSize = (Large) ? "80" : (Medium) ? "61" : "42";

    return (
        <a href={href} className={`flex items-center justify-center ${props.className}`}>
            <h1 className="font-bold transition duration-200 ease-linear " style={LogoTextStyle}>TraveL</h1>
            <Logo Size={LogoSize} Fill={PrimaryColorStyles.Color_100} className="transition duration-200 ease-linear "/>
            <h1 className="font-bold transition duration-200 ease-linear " style={LogoTextStyle}>gs</h1>
        </a>
    )
}

// NavbarBrand.propTypes = {
//     href: propTypes.string,
//     PrimaryColorStyles: propTypes.object.isRequired
//     ThemeStyles: propTypes.object.isRequired
// }

// NavbarBrand.defaultProps = {
//     href: "#",
//     PrimaryColorStyles: { Color_100: "#fff"}
//     ThemeStyles: { isCurrentThemeDark: false, HeadingText: "#fff"}
// }

export default NavbarBrand