import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ className, onClick, onMouseEnter, onMouseLeave, ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);

    // CSS Styles
    const style = {
        ...props.style,
        backgroundColor: (props.CustomBG) ? props.CustomBG : (props.Elevation03) ? ThemeStyles.CardBG_Elevation_Level_03 : (props.Elevation02) ? ThemeStyles.CardBG_Elevation_Level_02 : ThemeStyles.CardBG_Elevation_Level_01,
        boxShadow: ThemeStyles.CardShadow,
    }

    return (
        <div className={`transition duration-200 ease-linear ${className}`} onClick={onClick} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {props.children}
        </div>
    )
}

// Card.propTypes = {
//     className: propTypes.string,
//     ThemeStyles: propTypes.object.isRequired,
//     onMouseEnter: propTypes.func,
//     onMouseLeave: propTypes.func,
// }
  
// Card.defaultProps = {
//     className: "",
//     ThemeStyles: { CardBG_Elevation_Level_01: "#fff", CardShadow: "#fff" }
// }

export default Card
