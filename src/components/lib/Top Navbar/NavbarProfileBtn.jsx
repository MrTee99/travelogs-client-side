import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NavbarProfileBtn = ({ setHoveringOverBtn, ProfilePic, Username }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    // States
    const [isHoveringBtnZoomContent, setIsHoveringBtnZoomContent] = useState(false);

    // CSS Styles
    const Styles = {
        profileButtonStyle: {
            backgroundColor: ThemeStyles.CardBG_Elevation_Level_02,
            borderColor: PrimaryColorStyles.Color_100,
        },
        profilePicTextStyle: {
            color: (ThemeStyles.isCurrentThemeDark) ? ThemeStyles.HeadingText : PrimaryColorStyles.Color_100
        },
        profilePicStyle: {
            width: "110%", 
            height:"110%"
        },
        contentStyle: "transform transition-all duration-200 ease-linear",
        zoomInContentStyle: (isHoveringBtnZoomContent) ? "scale-110" : ""
    }

    // Handle Menu Hover
    const onMouseEnter = () => { setIsHoveringBtnZoomContent(true); setHoveringOverBtn(true); }
    const onMouseLeave = () => { setIsHoveringBtnZoomContent(false); setHoveringOverBtn(false); }

    return (
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={Styles.profileButtonStyle}
                className="w-12 h-12 border-2 rounded-full overflow-hidden flex justify-center items-center transition duration-200 ease-linear">

                    {!ProfilePic && <h3 className={`text-center text-3xl font-bold translate-y-0.5 ${Styles.contentStyle} ${Styles.zoomInContentStyle}`} style={Styles.profilePicTextStyle}>{Username[0].toUpperCase()}</h3>}
                    {ProfilePic && <img src={ProfilePic} alt="profile pic" className={`${Styles.contentStyle} ${Styles.zoomInContentStyle}`} style={Styles.profilePicStyle}/>}
        </button>
    )
}

// NavbarProfileBtn.propTypes = {
//     PrimaryColorStyles: propTypes.object.isRequired,
//     ThemeStyles: propTypes.object.isRequired,
//     Username: propTypes.string,
//     ProfilePic: propTypes.any,      // Image
//     setHoveringOverBtn: propTypes.func.isRequired,
// } 

// NavbarProfileBtn.defaultProps = {
//     Username: "Username",
//     PrimaryColorStyles: { Color_100: "#FFF" },
//     ThemeStyles: { isCurrentThemeDark: false, CardBG_Elevation_Level_02: "#FFF", HeadingText: "#FFF" },
// }


export default NavbarProfileBtn
