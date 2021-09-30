import React, { useState } from 'react'
import Card from "../../utils/Card"
import Button from "../../utils/Button"
import Input from '../../utils/Input'
import Spinner from "../../utils/Spinner"
import isEmail from "validator/lib/isEmail";
import { useSelector } from 'react-redux';
import Logo from "../../icons/Logo"
import NavbarBrand from '../Top Navbar/NavbarBrand'

import useLoginRegister from '../../../hooks/useLoginRegister'

const LoginForm = ({ handleCardFlip, ...props }) => {

    const noErrorState = { email: "", password: "" }
    const [error, setError] = useState(noErrorState)
    
    const [formData, setFormData] = useState({ email: "tahir@gmail.com", password: "Tahir123!@" })
    const handleEmailOnInputChange = (e) => setFormData({...formData, email: e.target.value});
    const handlePasswordOnInputChange = (e) => setFormData({...formData, password: e.target.value});

    const validationFunc = () => {
        const emailValidation = (formData.email === "") ? "Field is Required*" : (!isEmail(formData.email)) ? "Invalid Email" : "";
        const passwordValidation = (formData.password === "") ? "Field is Required*" : ""
        return { email: emailValidation, password: passwordValidation }
    }

    const { isProcessingData, setIsProcessingData, executeRequest } = useLoginRegister({ performingLogin: true, formData, setError, noErrorState, validationFunc });

    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    // Submit Form Function
    const submitForm = async (e) => {
        e.preventDefault();
        executeRequest();
    }
    
    // Flip from Login to Signup function and clear form data
    const onClickSignupPage = () => {
        handleCardFlip();
        setTimeout(() => {
            setFormData({ email: "", password: "" });
            setError(noErrorState);
            setIsProcessingData(false)
        }, 500)
    }
 
    // CSS Styles
    const Styles = {
        BtnBG: PrimaryColorStyles.Color_100,
        BtnHoverBG: PrimaryColorStyles.Color_200,
        BtnFG: ThemeStyles.CardBG_Elevation_Level_02,
        InputClasses: "w-full",
        InputBG: ThemeStyles.CardBG_Elevation_Level_02,
        formHeadingStyles: {
            color: ThemeStyles.HeadingText
        },
        signupTextBtn: {
            color: ThemeStyles.InputBorder
        }
    }


    return (
        <Card className={`p-0 md:p-10 h-full w-full flex justify-center items-center flex-col rounded-xl ${props.className}`} Elevation02>
            <Logo Size="150" Fill={PrimaryColorStyles.Color_100} className="hidden lg:block"/>
            <NavbarBrand className="hidden md:flex lg:hidden" Large />
            <NavbarBrand className="hidden sm:flex md:hidden" Medium />
            <NavbarBrand className="flex sm:hidden mb-1" />
            <h1 className="mt-2 sm:mt-6 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl" style={Styles.formHeadingStyles}>Account Login</h1>

            <div className="mt-12 sm:mt-8 w-full flex flex-col items-center">
                <form className="w-5/6 flex flex-col gap-6 sm:gap-4" onSubmit={submitForm}>
                    <Input type="text"     Title="Email"    Placeholder="Enter email..."    error={error.email}    InputVal={formData.email}    handleOnInputChange={handleEmailOnInputChange}     className={Styles.InputClasses} BGcolor={Styles.InputBG} />
                    <Input type="password" Title="Password" Placeholder="Enter password..." error={error.password} InputVal={formData.password} handleOnInputChange={handlePasswordOnInputChange}  className={Styles.InputClasses} BGcolor={Styles.InputBG} />

                    <Button type="submit" disabled={isProcessingData} className="mt-3 w-full text-2xl flex flex-row justify-center items-center gap-3" BGcolor={Styles.BtnBG} HoverBGcolor={Styles.BtnHoverBG} FGcolor={Styles.BtnFG}>
                        Login
                        {isProcessingData && <Spinner className="transform translate-y-1" Size="2" Color={ThemeStyles.CardBG_Elevation_Level_02} />}
                    </Button>
                </form>

                <button className="mt-4 px-10 sm:p-0" style={Styles.signupTextBtn} onClick={onClickSignupPage} >
                    Not a memeber? Click here to signup
                </button>
            </div>
        </Card>
    )
}

export default LoginForm
