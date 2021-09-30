import React from 'react';
// import propTypes from "prop-types";

const AddIcon = ({ Size, Fill, onMouseEnter, onMouseLeave, onClick, ...props }) => {
    return (
        <svg className={props.className} style={props.style} 
             onClick={onClick}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             fill={Fill} width={Size} height={Size} 
             viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/>
        </svg>
    )
}

// AddIcon.propTypes = {
//     Size: propTypes.string,
//     Fill: propTypes.string,
//     onMouseEnter: propTypes.func.isRequired,
//     onMouseLeave: propTypes.func.isRequired,
//     onClick: propTypes.func.isRequired,
// }
  
// AddIcon.defaultProps = {
//     Size: "32",
//     Fill: "#4287f5"
// }

export default AddIcon
