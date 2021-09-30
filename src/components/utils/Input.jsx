import React from 'react';
// import SuccessIcon from "../icons/SuccessIcon"
import ErrorIcon from "../icons/ErrorIcon"
import { useSelector } from 'react-redux';

const Input = ({ Title, Placeholder, InputVal, handleOnInputChange, BGcolor, type="text", error, ...props }) => {
    const uniqueID = Title + generateUniqueID();
    const ThemeStyles = useSelector((state) => state.theme);

    // CSS Styles
    const Styles = {
        wrapperDivStyle : {
            borderColor: (error) ? "#ff5f5f" : ThemeStyles.InputBorder,     // : (isValidInput) ? "#8ac63d"
        },
        labelStyle: {
            backgroundColor: BGcolor,
            color: ThemeStyles.InputBorder
        },
        inputStyle: {
            color: ThemeStyles.InputText
        },
        infoIconWrapperStyle: {
            backgroundColor: BGcolor
        },
        errorMessageStyle: {
            // visibility: (isValidInput === 2) ? "visible" : "hidden",
            color: "#ff5f5f"
        }
    }

    return (
        <div className={` ${props.className}`}>
            <div className="relative p-2 pt-3 border-2 rounded-lg" style={Styles.wrapperDivStyle}>
                <label htmlFor={uniqueID} className="absolute -top-3 px-1 ml-1 text-sm" style={Styles.labelStyle}>{Title}</label>
                <div className="flex justify-center items-center">
                    <input type={type} id={uniqueID} placeholder={Placeholder}
                           value={InputVal} onChange={handleOnInputChange} 
                           className="mx-2 w-full bg-transparent outline-none" style={Styles.inputStyle}/>
                    <div className="absolute right-0 mb-1 pl-5 pr-3.5 flex justify-center items-center" style={Styles.infoIconWrapperStyle}>
                        {/* {isValidInput && <SuccessIcon Size="20"/>} */}
                        {error && <ErrorIcon Size="20"/>}
                    </div>
                </div>
            </div>
            <p className="my-0.5" style={Styles.errorMessageStyle}>{error}</p>
        </div>
    )
}

const generateUniqueID = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
export default Input
