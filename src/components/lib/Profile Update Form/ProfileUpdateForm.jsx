import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../../utils/Card';
import Button from '../../utils/Button';
import Input from '../../utils/Input';
import InputTextArea from '../../utils/InputTextArea';
import ImageSelector from '../../utils/ImageSelector';
import Spinner from '../../utils/Spinner';
import useUpdateMyProfile from '../../../hooks/useUpdateMyProfile';

const ProfileUpdateForm = ({ title }) => {
    const userData = useSelector((state) => state.user);
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    const noErrorState = { username: "", img: "" }
    const [error, setError] = useState(noErrorState)

    const initialFormData = { username: userData.user.username, img: userData.user.img }
    const [formData, setFormData] = useState(initialFormData)    
    const handleUsernameOnInputChange = (e) => setFormData({...formData, username: e.target.value});
    const handleImageOnInputChange = (e) => setFormData({...formData, img: e.target.files[0]});

    const validationFunc = () => {
        const usernameValidation = (formData.username === "") ? "Field is Required*" : (formData.username.length > 20 || formData.username.length <= 6) ? "Length must be greater than 6 and less than 20" : "";
        const imageValidation = (formData.img.size > 1000000) ? "Image size must be less than 1MB" : (formData.img.type && (formData.img.type !== "image/jpg" && formData.img.type !== "image/jpeg" && formData.img.type !== "image/png")) ? "Image format must be either jpg, jpeg or png" : ""
        return { username: usernameValidation, img:imageValidation  }
    }

    const { isProcessingData, setIsProcessingData, executeRequest } = useUpdateMyProfile({ prevformData: initialFormData, newFromData: formData, setError, noErrorState, validationFunc });

    const Styles = {
        title: {
            color: themeColors.HeadingText
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        executeRequest();
    }
 
    return (
        <div className="w-full h-full overflow-y-scroll px-3 pt-1 md:pt-3">
            <div className="mb-3.5">
                <Card className="w-full p-5 pt-7 pb-6 rounded-md">
                    <h1 className="text-4xl md:text-5xl" style={Styles.title}>{title}</h1>
                    <form className="mt-10  w-full flex flex-col gap-4" onSubmit={submitForm}>
                        <div className="h-full flex flex-col gap-4">
                            <Input className="w-full" Title="Username" Placeholder="Enter username..."  error={error.username}  InputVal={formData.username}  handleOnInputChange={handleUsernameOnInputChange} BGcolor={themeColors.CardBG_Elevation_Level_01} />
                            <ImageSelector imgPreviewHeightClasses="w-full min-h-56 md:h-96" error={error.img} imgVal={formData.img} handleOnInputChange={handleImageOnInputChange}/>
                        </div>
                        <Button type="submit" disabled={isProcessingData} className="h-12 font-bold text-xl flex flex-row justify-center items-center gap-3" BGcolor={PrimaryColorStyles.Color_100} HoverBGcolor={PrimaryColorStyles.Color_200} FGcolor={themeColors.CardBG_Elevation_Level_02}>
                            Submit
                            {isProcessingData && <Spinner className="transform translate-y-1" Size="2" Color={themeColors.CardBG_Elevation_Level_02} />}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ProfileUpdateForm

