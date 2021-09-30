import React from 'react'
import Card from '../../utils/Card'
import { useSelector } from 'react-redux'

const ProfileHeaderStatsCard = ({ title, statsNum, ...props }) => {
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);

    const Styles = {
        title: {
            color: themeColors.HeadingText
        },
        statsNum: {
            color: PrimaryColorStyles.Color_100
        }
    }

    return (
        <Card className={`select-none rounded-md flex flex-col justify-center items-center transform hover:scale-95 ${props.className}`}>
            <h3 className="text-lg font-bold" style={Styles.title}>{title}</h3>
            <h3 className="mt-2 text-6xl font-bold" style={Styles.statsNum}>{statsNum}</h3>
        </Card>
    )
}

export default ProfileHeaderStatsCard
