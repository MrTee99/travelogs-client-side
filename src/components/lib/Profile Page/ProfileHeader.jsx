import React from 'react'
import ProfileHeaderPic from './ProfileHeaderPic'
import ProfileHeaderStatsCard from './ProfileHeaderStatsCard'
import ProfileHeaderAddCard from './ProfileHeaderAddCard'
import ProfileHeaderMainCard from './ProfileHeaderMainCard'
import ProfileHeaderMainCardBtn from './ProfileHeaderMainCardBtn'
import { useHistory } from 'react-router'
import { routerPaths } from '../../../utils/enums'
import { useSelector } from 'react-redux'

import useDeleteMyProfile from '../../../hooks/useDeleteMyProfile'

const ProfileHeader = ({ openSidePage }) => {
    const history = useHistory();
    const userData = useSelector((state) => state.user)

    const handleAddNewPostClick = () => history.push({ pathname: routerPaths.CREATE });
    // const handleFollowClick = () => console.log("clicked Follow")
    // const handleAdmireClick = () => console.log("clicked Admire")

    const { executeRequest } = useDeleteMyProfile();
    const handleEditProfile = () => openSidePage(true, {})
    const handleDeleteProfile = () => executeRequest();

    return (
        <div className="mt-32 w-full flex justify-center items-center flex-col relative">

            <ProfileHeaderPic profilePic={userData.user.img}/>

            <div className="w-full h-auto px-3 sm:px-10 lg:px-32">
                <div className="w-full h-auto flex flex-col justify-start transition-all z-10 gap-3">
                    <ProfileHeaderMainCard name={userData.user.username} year={userData.user.createdAt.substr(0,4)} />
                    <div className="flex justify-center gap-3 transition-all z-10">
                        <ProfileHeaderMainCardBtn className="w-full py-2 px-3" title="Edit" onClick={handleEditProfile}/>
                        <ProfileHeaderMainCardBtn className="w-full py-2 px-3" title="Delete" onClick={handleDeleteProfile}/>
                        {/* <ProfileHeaderMainCardBtn className="w-full py-2 px-3" title="Follow" onClick={handleFollowClick}/>
                        <ProfileHeaderMainCardBtn className="w-full py-2 px-3" title="Admire" onClick={handleAdmireClick}/> */}
                    </div>
                    <div className="flex justify-center gap-3 transition-all z-10">
                        <ProfileHeaderStatsCard className="w-full py-5 px-3 hidden md:flex" title="Total Posts" statsNum={userData.user.totalPosts}/>
                        <ProfileHeaderStatsCard className="w-full py-5 px-3" title="Followers" statsNum={userData.user.totalFollowers}/>
                        <ProfileHeaderStatsCard className="w-full py-5 px-3" title="Admirers" statsNum={userData.user.totalAdmirers}/>
                        <ProfileHeaderAddCard className="w-full py-5 px-3 hidden md:flex" title="Create New Post" onClick={handleAddNewPostClick}/>
                    </div>
                    <div className="flex md:hidden justify-center gap-3 transition-all z-10">
                        <ProfileHeaderStatsCard className="w-full py-5 px-3" title="Total Posts" statsNum={userData.user.totalPosts}/>
                        <ProfileHeaderAddCard className="w-full py-5 px-3" title="Create New Post" onClick={handleAddNewPostClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
