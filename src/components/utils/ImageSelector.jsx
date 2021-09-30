import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import pic from '../../images/profile-pic-placeholder.jpg'

const ImageSelector = ({ imgVal, imgPreviewHeightClasses, handleOnInputChange, error, ...props }) => {
    const [isHoveringBtn, setIsHoveringBtn] = useState(false);

    const [selectedFile, setSelectedFile] = useState(imgVal);
    const handleSetSelectedFile = (e) => {
        if(e.target.files[0] !== null) setSelectedFile(URL.createObjectURL(e.target.files[0]))
        handleOnInputChange(e)
    }

    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    const Styles = {
        wrapperDivStyle : {
            borderColor: (error) ? "#ff5f5f" : themeColors.InputBorder,     // : (isValidInput) ? "#8ac63d"
        },
        inputStyle: {
            color: themeColors.InputText
        },
        errorMessageStyle: {
            // visibility: (isValidInput === 2) ? "visible" : "hidden",
            color: "#ff5f5f"
        },
        selectImageDivBtn: {
            backgroundColor: (isHoveringBtn) ? PrimaryColorStyles.Color_200 : PrimaryColorStyles.Color_100, 
            color: themeColors.CardBG_Elevation_Level_02,
            borderTopLeftRadius: (selectedFile) ? "0" : "0.375rem",
            borderTopRightRadius: (selectedFile) ? "0" : "0.375rem"
        }
    }

    return (
        <div className="w-full h-full flex flex-col">
            {selectedFile && <div className={`h-full rounded-lg rounded-b-none border-2 border-b-0 flex overflow-hidden justify-center items-center ${imgPreviewHeightClasses}`} style={Styles.wrapperDivStyle}>
                <img className="w-full h-full object-cover" src={selectedFile} alt="selected pic preview"/>
            </div>}
            <input type="file" id="selectImage" className="hidden" accept="image/png, image/jpg, image/jpeg" onChange={handleSetSelectedFile}/>
            <label htmlFor="selectImage">
                <div className="w-full p-3 text-xl font-bold cursor-pointer text-center rounded-md round transition duration-200 ease-linear" style={Styles.selectImageDivBtn} onMouseEnter={setIsHoveringBtn.bind(null, true)} onMouseLeave={setIsHoveringBtn.bind(null, false)}>
                    Select Image
                </div>
            </label>
            <p className="my-0.5" style={Styles.errorMessageStyle}>{error}</p>
        </div>

    )
}

export default ImageSelector
