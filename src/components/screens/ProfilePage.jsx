import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProfileHeader from '../lib/Profile Page/ProfileHeader'
import PostsGrid from '../lib/Posts Grid/PostsGrid'
import PostForm from '../lib/Post Form/PostForm';
import ProfileUpdateForm from '../lib/Profile Update Form/ProfileUpdateForm';
import { uiActions } from '../../store/ui_slice/ui-slice';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const uiData = useSelector((state) => state.ui);

    const [openSidePage, setOpenSidePage] = useState(false)
    const [editablePostData, setEditablePostData] = useState({})

    const handleOpenSidePage = (bool, postData) => {
        if(postData) setEditablePostData(postData)
        setOpenSidePage(bool)

        if(bool === true) dispatch(uiActions.showBackBtn())
    }

    const style = {
        transform: (openSidePage) ? "translateX(-100%)" : "translateX(0%)"
    }

    useEffect(() => {
        if(!uiData.displayBackButton) {
            setOpenSidePage(false)
        }
    }, [uiData.displayBackButton])

    return (
        <div className="w-full h-full overflow-x-hidden">
            <div className="w-full h-full flex transition-all" style={style}>
                <div className="w-full flex-shrink-0 overflow-y-scroll">
                    <ProfileHeader openSidePage={handleOpenSidePage}/>
                    <PostsGrid profilePosts className="mt-0 sm:mt-16" title="My Travel Logs" openSidePage={handleOpenSidePage} />
                </div>
                <div className="w-full h-full flex-shrink-0 overflow-y-hidden relative">
                    {/* <Card onClick={handleOpenSidePage.bind(null, false, undefined)} className="mt-3 ml-3 w-max rounded-md select-none cursor-pointer py-2 px-4 transform hover:scale-105" CustomBG={PrimaryColorStyles.Color_100}>
                        <span className="font-bold" style={{ color: themeColors.Background }}>Go Back</span>
                    </Card> */}
                    {openSidePage && <ProfileUpdateForm title="Updating My Profile"/>}
                    {openSidePage && editablePostData && <PostForm isUpdating title="Updating Post" formValues={editablePostData}/>}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
