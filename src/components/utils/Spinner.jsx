import React from 'react'
import CSS from './Spinner.module.css';

const Spinner = ({ Size="2.5", Color="#fff", ...props }) => {
    const borderSize = `${Size * 0.2}rem`;
    const borderStyle = {
        border: `${borderSize} solid ${Color}`,
        borderColor: `${Color} transparent ${Color} transparent`
    }
    const spinnerStyle = {
        width: `${Size}rem`,
        height: `${Size}rem`,
    }

    return (
        <div className={`${props.className} ${CSS.spinner}`} style={spinnerStyle}>
            <div style={borderStyle}></div>
        </div>
    )
}

export default Spinner
