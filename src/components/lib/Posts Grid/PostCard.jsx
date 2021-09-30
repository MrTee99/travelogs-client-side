import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../utils/Button'
import Card from '../../utils/Card'
import HeartIcon from '../../icons/HeartIcon'
import CreateIcon from '../../icons/CreateIcon'
import DeleteIcon from '../../icons/DeleteIcon'
import moment from 'moment'
import useDeletePost from '../../../hooks/useDeletePost'

const PostCard = ({ openSidePage, postID, postPic, profilePic, profileName, postCreationDate, postTitle, postHashtags, postDescription, postAdmires, isPostAdmired, isAuthenticatedUserPost }) => {
    const themeColors = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    const [admiredPost, setAdmiredPost] = useState(isPostAdmired)
    const [isHeartButtonSelected, setIsHearButtonSelected] = useState(isPostAdmired)
    const [isHovering, setIsHovering] = useState(false);

    const Styles = {
        card: {
            width: "22.7rem",
            // transform: (isHovering) ? "scale(97.5%)" : "scale(100%)"
        },
        imageHolder: {
            backgroundColor: themeColors.CardBG_Elevation_Level_03
        },
        profilePicHolder: {
            backgroundColor: themeColors.CardBG_Elevation_Level_03
        },
        profileName: {
            color: themeColors.HeadingText
        },
        postedDate: {
            color: themeColors.Text
        },
        postTitle: {
            color: PrimaryColorStyles.Color_100
        },
        postHashtags: {
            color: themeColors.Text
        },
        postDescription: {
            color: themeColors.SubHeadingText
        },
        heartBtnText: {
            color: themeColors.SubHeadingText
        }
    }

    const { executeRequest } = useDeletePost(postID)
    const postData = {
        _id: postID,
        title: postTitle,
        hashtags: postHashtags,
        description: postDescription,
        img: postPic,
    }
    const onClickEditBtn = () => openSidePage(true, postData);
    const onClickDeleteBtn = () => executeRequest();

    const toggleHeartBtnSelection = () => {
        setAdmiredPost((prev) => !prev)
        setIsHearButtonSelected((prev) => !prev)
    }

    const getResolvedHashtags = () => {
        let resolvedHashtags = "";
        const resolvedHashtagsArr = postHashtags.split(",");
        resolvedHashtagsArr.forEach((hashtag) => {
            resolvedHashtags += `#${hashtag.trim()} `
        })
        return resolvedHashtags;
    }

    return (
        <Card className="rounded-lg overflow-hidden" style={Styles.card}  onMouseEnter={setIsHovering.bind(null, true)} onMouseLeave={setIsHovering.bind(null, false)}>
            <div className="w-full h-48 overflow-hidden" style={Styles.imageHolder}>
                {postPic && <img className="w-full h-full object-cover transform hover:scale-110 transition duration-200 ease-linear" src={postPic} alt="post pic" />}
            </div>
            <div className="w-full px-5 ">
                <div className="w-full py-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden" style={Styles.profilePicHolder}>
                        {profilePic && <img className="w-full h-full cursor-pointer object-cover transform hover:scale-110 transition duration-200 ease-linear" src={profilePic} alt="post pic" />}
                    </div>
                    <div className="flex-auto flex flex-col justify-center">
                        <h1 className="text-xl font-bold" style={Styles.profileName}>{profileName}</h1>
                        <h5 className="text-xs" style={Styles.postedDate}>posted {moment(postCreationDate).fromNow()}</h5>
                    </div>
                    {isAuthenticatedUserPost && <div className="flex flex-col gap-2">
                        <CreateIcon onClick={onClickEditBtn} className="cursor-pointer transform hover:scale-90 transition-all" Size="20" Fill={PrimaryColorStyles.Color_100}/>
                        <DeleteIcon onClick={onClickDeleteBtn} className="cursor-pointer transform hover:scale-90 transition-all" Size="20" Fill={PrimaryColorStyles.Color_100}/>
                    </div>}
                </div>
                <div className="mt-1 w-full">
                    <h1 className="text-3xl tracking-tight" style={Styles.postTitle}>{postTitle}</h1>
                    <h5 className="my-1.5 text-sm italic" style={Styles.postHashtags}>{getResolvedHashtags()}</h5>
                    <p className="leading-5" style={Styles.postDescription}>{postDescription.substring(0, 100)}...</p>
                </div>
                <div className="my-4 w-full flex justify-between items-end">
                    <div className="flex gap-2 items-center">
                        <HeartIcon Size="32" Fill={PrimaryColorStyles.Color_100} onClick={toggleHeartBtnSelection} isSelected={isHeartButtonSelected}/>
                        <div className="flex flex-col justify-center text-sm">
                            {admiredPost && <h3 style={Styles.heartBtnText}>You and {postAdmires} others</h3>}
                            {!admiredPost && <h3 style={Styles.heartBtnText}>{postAdmires} people</h3>}
                            <h3 className="-mt-0.5" style={Styles.heartBtnText}>admired this</h3>
                        </div>
                    </div>
                    <Button className="mt-3 px-3 h-8 transform hover:scale-105" BGcolor={PrimaryColorStyles.Color_100} HoverBGcolor={PrimaryColorStyles.Color_200} FGcolor={themeColors.CardBG_Elevation_Level_01}>Read More</Button>
                </div>
            </div>
        </Card>
    )
}

export default PostCard
