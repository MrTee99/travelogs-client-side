import React from 'react'
import Card from '../../utils/Card'
import { useSelector } from 'react-redux'
import AddIcon from '../../icons/AddIcon'

const ProfileHeaderAddCard = ({ title, onClick, ...props }) => {
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    const Styles = {
        title: {
            color: themeColors.HeadingText
        }
    }

    return (
        <Card onClick={onClick} className={`select-none cursor-pointer transform hover:scale-95 rounded-md flex flex-col justify-center items-center ${props.className}`}>
            <h3 className="text-lg font-bold text-center" style={Styles.title}>{title}</h3>
            <AddIcon className="mt-2" Size="48" Fill={PrimaryColorStyles.Color_100} />
        </Card>
    )
}

export default ProfileHeaderAddCard
