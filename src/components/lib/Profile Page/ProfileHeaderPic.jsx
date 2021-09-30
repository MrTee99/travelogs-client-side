import React from 'react'
import Card from '../../utils/Card'
import profilePicPlaceholderImg from '../../../images/profile-pic-placeholder.jpg'
import { useSelector } from 'react-redux'

const ProfileHeaderPic = ({ profilePic }) => {
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    return (
        <Card className="rounded-full w-44 h-44 absolute -top-24 z-20 place-items-center grid transition duration-200 ease-linear"> 
            <Card className="rounded-full overflow-hidden p-1  select-none" style={{ width: "92%", height: "92%" }}  CustomBG={PrimaryColorStyles.Color_100}>
                <img className="w-full h-full rounded-full transform hover:scale-110 transition-all" src={(profilePic) ? profilePic : profilePicPlaceholderImg} alt="profile pic" />
            </Card>
        </Card>
    )
}

export default ProfileHeaderPic
