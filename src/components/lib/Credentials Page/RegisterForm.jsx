import React, { useState } from 'react'
import Card from "../../utils/Card"
import Button from "../../utils/Button"
import Input from '../../utils/Input'
import Spinner from "../../utils/Spinner"
import isEmail from "validator/lib/isEmail";
import { useSelector } from 'react-redux';

import useLoginRegister from '../../../hooks/useLoginRegister'

const RegisterForm = ({ handleCardFlip, ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    const noErrorState = { username: "", email: "", password: "" }
    const [error, setError] = useState(noErrorState)
    const errorCodeMessage = { code: 11000, setError: setError.bind(null, (prev) => { return {...prev, email: "This email is already in use"} }) }

    const [formData, setFormData] = useState({ username: "Tahir Saeed", email: "tahir@gmail.com", password: "Tahir123!@" })
    const handleUsernameOnInputChange = (e) => setFormData({...formData, username: e.target.value});
    const handleEmailOnInputChange = (e) => setFormData({...formData, email: e.target.value});
    const handlePasswordOnInputChange = (e) => setFormData({...formData, password: e.target.value});

    const validationFunc = () => {
        const usernameValidation = (formData.username === "") ? "Field is Required*" : (formData.username.length > 20 || formData.username.length <= 6) ? "Length must be greater than 6 and less than 20" : "";
        const emailValidation = (formData.email === "") ? "Field is Required*" : (!isEmail(formData.email)) ? "Invalid Email" : "";
        const passwordValidation = (formData.password === "") ? "Field is Required*" : (formData.password.length < 6) ? "Password length must be atleast 6 characters long" : "";
        return { username: usernameValidation, email: emailValidation, password: passwordValidation }
    }

    const { isProcessingData, setIsProcessingData, executeRequest } = useLoginRegister({ performingLogin: false, formData, setError, noErrorState, validationFunc, errorCodeMessage });

    // Submit Form Function
    const submitForm = (e) => {
        e.preventDefault();
        executeRequest();
    }

    // Flip from Login to Signup function and clear form data
    const onClickLoginPage = () => {
        handleCardFlip();
        setTimeout(() => {
            setFormData({ username: "", email: "", password: "" });
            setError(noErrorState);
            setIsProcessingData(false)
        }, 500)
    }

    // CSS Styles
    const Styles = {
        BtnBG: PrimaryColorStyles.Color_100,
        BtnHoverBG: PrimaryColorStyles.Color_200,
        BtnFG: ThemeStyles.CardBG_Elevation_Level_02,
        InputClasses: "w-full mb-2",
        InputBG: ThemeStyles.CardBG_Elevation_Level_02,
        formHeadingStyles: {
            color: ThemeStyles.HeadingText,
        },
        signupTextBtn: {
            color: ThemeStyles.InputBorder
        }
    }

    return (
        <Card className={`p-2 md:p-10 h-full w-full flex justify-center items-center flex-col rounded-xl ${props.className}`} Elevation02>
                    
            <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-4.5xl" style={Styles.formHeadingStyles}>Create an Account</h1>

            <div className="mt-12 sm:mt-10 w-full flex flex-col items-center">
                <form className="w-5/6 flex flex-col gap-6 sm:gap-4">
                    <Input type="text"     Title="Username"    Placeholder="Enter username..."  error={error.username}  InputVal={formData.username}  handleOnInputChange={handleUsernameOnInputChange}  className={Styles.InputClasses} BGcolor={Styles.InputBG} />
                    <Input type="text"     Title="Email"    Placeholder="Enter email..."        error={error.email}     InputVal={formData.email}     handleOnInputChange={handleEmailOnInputChange}     className={Styles.InputClasses} BGcolor={Styles.InputBG} />
                    <Input type="password" Title="Password" Placeholder="Enter password..."     error={error.password}  InputVal={formData.password}  handleOnInputChange={handlePasswordOnInputChange}  className={Styles.InputClasses} BGcolor={Styles.InputBG} />

                    <Button type="submit" disabled={isProcessingData} className="mt-3 w-full text-2xl flex flex-row justify-center items-center gap-3" handleOnClick={submitForm} BGcolor={Styles.BtnBG} HoverBGcolor={Styles.BtnHoverBG} FGcolor={Styles.BtnFG}>
                        Register
                        {isProcessingData && <Spinner className="transform translate-y-1" Size="2" Color={ThemeStyles.CardBG_Elevation_Level_02} />}
                    </Button>
                </form>

                <button className="mt-4 px-10 sm:p-0" style={Styles.signupTextBtn} onClick={onClickLoginPage} >
                    Already a member? Click here to login
                </button>
            </div>
        </Card>
    )
}

export default RegisterForm
