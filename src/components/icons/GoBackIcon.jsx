import React from 'react'
// import propTypes from "prop-types";

const GoBackIcon = ({ Size, Fill, onMouseEnter, onMouseLeave, onClick, ...props }) => {
    return (
        <svg className={props.className} style={props.style} 
             onClick={onClick}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             fill={Fill} width={Size} height={Size} 
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.483 438.483">
            <path d="M431.168,230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68c-1.536,0-3.072,0.512-4.608,1.536L3.136,171.882c-3.584,2.56-4.096,7.168-1.536,10.752c0.512,0.512,1.024,1.024,1.536,1.536l227.84,163.84c3.584,2.56,8.192,1.536,10.752-1.536c1.024-1.536,1.536-3.072,1.536-4.608v-88.064c55.296,0,101.888,26.112,118.272,65.536c13.824,33.792,2.56,70.144-30.208,100.352c-3.072,3.072-3.584,7.68-0.512,10.752c1.536,1.536,3.584,2.56,5.632,2.56h6.144c1.536,0,3.072-0.512,4.096-1.536C421.952,381.802,454.208,304.49,431.168,230.762z"/>
        </svg>
    )
}

// GoBackIcon.propTypes = {
//     Size: propTypes.string,
//     Fill: propTypes.string,
//     onMouseEnter: propTypes.func.isRequired,
//     onMouseLeave: propTypes.func.isRequired,
//     onClick: propTypes.func.isRequired,
// }
  
// GoBackIcon.defaultProps = {
//     Size: "32",
//     Fill: "#4287f5"
// }

export default GoBackIcon
