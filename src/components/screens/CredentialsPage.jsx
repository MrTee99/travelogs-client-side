import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import AppInfo from '../lib/Credentials Page/AppInfo';
import LoginForm from '../lib/Credentials Page/LoginForm';
import RegisterForm from '../lib/Credentials Page/RegisterForm';
import DancingDivs from '../lib/Credentials Page/DancingDivs';
import { useSelector } from 'react-redux';

const CredentialsPage = () => {
    const ThemeStyles = useSelector((state) => state.theme);

    // States
    const [isFlipped, setIsFlipped] = useState(false);
    const FlipCard = () => setIsFlipped((prev) => !prev)

    // CSS Styles
    const Styles = {
        pageBG: { backgroundColor: (ThemeStyles.isCurrentThemeDark) ? ThemeStyles.CardBG_Elevation_Level_01 : "" }
    }

    const ResponsiveClasses = {
        mainBox: "w-full h-5/6  sm:w-4/6 lg:w-90per lg:h-5/6  xl:w-5/6",
        loginFormCard: "w-full justify-center lg:w-3/5 lg:justify-end"
    }

    return (
        <div className="w-full h-screen relative" style={Styles.pageBG}>
            <DancingDivs className="z-10 top-0" />
            <DancingDivs className="z-10 bottom-0 transform rotate-180" />

            <div className={`flex absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${ResponsiveClasses.mainBox}`}>
                <AppInfo className="w-2/5 h-full"/>
                <div className={`h-full flex items-center  ${ResponsiveClasses.loginFormCard}`}>
                    <ReactCardFlip containerStyle={{ width: "90%", height: "100%" }} isFlipped={isFlipped} flipDirection="horizontal">     
                        <LoginForm handleCardFlip={FlipCard} />
                        <RegisterForm handleCardFlip={FlipCard} />
                    </ReactCardFlip>
                </div>
            </div>
        </div>
    )
}

export default CredentialsPage
