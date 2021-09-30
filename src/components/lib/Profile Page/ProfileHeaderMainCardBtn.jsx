import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../../utils/Card'

const ProfileHeaderMainCardBtn = ({ title, onClick, ...props }) => {
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    const Styles = {
        BtnText: {
            color: themeColors.Background
        }
    }

    return (
        <Card onClick={onClick} className={`select-none rounded-md flex flex-col justify-center items-center transform hover:scale-95 ${props.className}`}  CustomBG={PrimaryColorStyles.Color_100} >
            <span className="font-bold text-2xl" style={Styles.BtnText}>{title}</span>
        </Card>
    )
}

export default ProfileHeaderMainCardBtn
