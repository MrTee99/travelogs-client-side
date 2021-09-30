import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../../utils/Card';
import Button from '../../utils/Button';
import Input from '../../utils/Input';
import InputTextArea from '../../utils/InputTextArea';
import ImageSelector from '../../utils/ImageSelector';
import Spinner from '../../utils/Spinner';
import useCreateAndUpdatePost from '../../../hooks/useCreateAndUpdatePost';

const PostForm = ({ isUpdating, title, formValues={ title: "", hashtags: "", description: "", img: undefined } }) => {
    const noErrorState = { title: "", hashtags: "", description: "", img: "" }
    const [error, setError] = useState(noErrorState)

    const [formData, setFormData] = useState(formValues)    
    const handleTitleOnInputChange = (e) => setFormData({...formData, title: e.target.value});
    const handleHashtagsOnInputChange = (e) => setFormData({...formData, hashtags: e.target.value});
    const handleDescriptionOnInputChange = (e) => setFormData({...formData, description: e.target.value});
    const handleImageOnInputChange = (e) => setFormData({...formData, img: e.target.files[0]});

    const validationFunc = () => {
        const titleValidation = (formData.title === "") ? "Field is Required*" : "";
        // const titleValidation = (formData.title === "") ? "Field is Required*" : (formData.title.length > 30) ? "Title cannot have more than 30 characters" : "";
        
        const hashtagsArray = (formData.hashtags !== "") ? formData.hashtags.split(",") : []
        let invalidHashtag = false;
        if(hashtagsArray.length > 0) {
            hashtagsArray.forEach((val) => {
                val = val.trim();
                invalidHashtag = (val.includes(" ")) ? true : invalidHashtag;
            })
        }
        // const hashtagsValidation = (hashtagsArray.length === 0) ? "Field is Required*" : (hashtagsArray.length > 3) ? "Only three hashtags are allowed" : (invalidHashtag) ? "Hashtags must not have spaces" : ""
        const hashtagsValidation = (hashtagsArray.length === 0) ? "Field is Required*" : (invalidHashtag) ? "Hashtags must not have spaces" : ""
        const descriptionValidation = (formData.description === "") ? "Field is Required*" : "";
        // const descriptionValidation = (formData.description === "") ? "Field is Required*" : (formData.description.length > 500) ? "Description cannot have more than 500 characters" : "";
        const imageValidation = (formData.img === undefined) ? "Field is Required*" : (formData.img.size > 1000000) ? "Image size must be less than 1MB" : (formData.img.type && (formData.img.type !== "image/jpg" && formData.img.type !== "image/jpeg" && formData.img.type !== "image/png")) ? "Image format must be either jpg, jpeg or png" : ""
        return { title: titleValidation, hashtags: hashtagsValidation, description: descriptionValidation, img:imageValidation  }
    }

    const { isProcessingData, setIsProcessingData, executeRequest } = useCreateAndUpdatePost({ formData, setError, noErrorState, validationFunc, isUpdating: (isUpdating) ? formValues : undefined });

    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

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
                    <form className="mt-10 w-full flex flex-col gap-4" onSubmit={submitForm}>
                        <div className="flex">
                            <div className="h-full flex flex-col flex-auto gap-5">
                                <Input         className="w-full"  Title="Title"                    Placeholder="Enter post title..."                 error={error.title}       InputVal={formData.title}       handleOnInputChange={handleTitleOnInputChange}       BGcolor={themeColors.CardBG_Elevation_Level_01} />
                                <Input         className="w-full"  Title="Hashtags (comma separated)"  Placeholder=" i.e. hashtag01, hashtag02"  error={error.hashtags}    InputVal={formData.hashtags}    handleOnInputChange={handleHashtagsOnInputChange}    BGcolor={themeColors.CardBG_Elevation_Level_01} />
                                <InputTextArea className="w-full"  Title="Description"             Placeholder="Enter post Description..."           error={error.description} InputVal={formData.description} handleOnInputChange={handleDescriptionOnInputChange} BGcolor={themeColors.CardBG_Elevation_Level_01} rows="9" cols="50"/>
                                <ImageSelector imgPreviewHeightClasses="w-full min-h-56 md:h-96" error={error.img} imgVal={formData.img} handleOnInputChange={handleImageOnInputChange}/>
                            </div>
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

export default PostForm
