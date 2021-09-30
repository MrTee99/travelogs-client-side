import React, { useState } from 'react'
// import propTypes from "prop-types";

const Button = ({ BGcolor, HoverBGcolor, FGcolor, handleOnClick, type, disabled, ...props }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleHover = (hoverState) => setIsHovering(hoverState);
  
    const style = {
        ...props.style,
        backgroundColor: (isHovering) ? HoverBGcolor : BGcolor,
        color: FGcolor,
    }

    const btnType = (type) ? type : "button";

    return (
        <button onClick={handleOnClick} type={btnType} disabled={disabled}
                onMouseEnter={handleHover.bind(null, true)} onMouseLeave={handleHover.bind(null, false)}
                className={`py-1.5 px-3 rounded-md font-bold transition duration-200 ease-linear ${props.className}`}
                style={style}>
            {props.children}
        </button>
    )
}

// Button.propTypes = {
//     className: propTypes.string,
//     BGcolor: propTypes.string,
//     HoverBGcolor: propTypes.string,
//     FGcolor: propTypes.string,
//     handleOnClick: propTypes.func
// }

// Button.defaultProps = {
//     className: "",
//     BGcolor: "#ef4444", 
//     HoverBGcolor: "#dc2626", 
//     FGcolor: "#f5f9fc", 
// }

export default Button
