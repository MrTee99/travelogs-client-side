import React from 'react'
import Card from '../../utils/Card'
import { useSelector } from 'react-redux'

const ProfileHeaderMainCard = ({ name, year  }) => {
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    const Styles = {
        name: {
            color: PrimaryColorStyles.Color_100,
            paddingTop: "5.25rem"
        },
        year: {
            color: themeColors.HeadingText
        }
    }

    return (
        <Card className="w-full h-full select-none rounded-md flex flex-col justify-start items-center">
            <h1 className="mt-1.5 text-4xl font-bold" style={Styles.name}>{name}</h1>
            <h3 className="mt-1 mb-2.5" style={Styles.year}>Active Since {year}</h3>
        </Card>
    )
}

export default ProfileHeaderMainCard
