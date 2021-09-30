import React from 'react'
// import propTypes from "prop-types";

const ErrorIcon = ({ Size, Fill, ...props }) => {
    return (
        <svg className={props.className} style={props.style} fill="#ff5f5f" width={Size} height={Size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256,0C115.2,0,0,115.2,0,256s115.2,256,256,256s256-115.2,256-256S396.8,0,256,0z M256,51.2    c28.16,0,48.64,23.04,46.08,51.2L281.6,307.2h-51.2l-20.48-204.8C207.36,74.24,227.84,51.2,256,51.2z M256,460.8    c-28.16,0-51.2-23.04-51.2-51.2c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2C307.2,437.76,284.16,460.8,256,460.8z"/>
        </svg>
    )
}

// ErrorIcon.propTypes = {
//     Size: propTypes.string,
//     Fill: propTypes.string
// }
  
// ErrorIcon.defaultProps = {
//     Size: "32",
//     Fill: "#4287f5"
// }

export default ErrorIcon
