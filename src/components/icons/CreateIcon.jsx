import React from 'react'
// import propTypes from "prop-types";

const CreateIcon = ({ Size, Fill, onMouseEnter, onMouseLeave, onClick, ...props }) => {
    return (
        <svg className={props.className} style={props.style} 
             onClick={onClick}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             fill={Fill} width={Size} height={Size} 
             viewBox="0 0 325 325.37515" xmlns="http://www.w3.org/2000/svg">
            <path d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0"/>
        </svg>
    )
}

// CreateIcon.propTypes = {
//     Size: propTypes.string,
//     Fill: propTypes.string,
//     onMouseEnter: propTypes.func.isRequired,
//     onMouseLeave: propTypes.func.isRequired,
//     onClick: propTypes.func.isRequired,
// }
  
// CreateIcon.defaultProps = {
//     Size: "32",
//     Fill: "#4287f5"
// }

export default CreateIcon