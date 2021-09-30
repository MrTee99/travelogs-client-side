import React, { useEffect } from 'react'
import PostCard from './PostCard'
import { useSelector } from 'react-redux'
import placeholderPic from '../../../images/profile-pic-placeholder.jpg'
import useGetPosts from '../../../hooks/useGetPosts'
import Spinner from '../../utils/Spinner'
import PostCardLong from './PostCardLong'

const PostsGrid = ({ title, openSidePage, profilePosts, ...props }) => {
    const themeColors = useSelector((state) => state.theme);
    const userData = useSelector((state) => state.user);
    const postsData = useSelector((state) => state.post);

    const Styles = {
        title: {
            color: themeColors.HeadingText
        },
        error: {
            color: "#ff5f5f"
        }
    }
    
    const { isProcessingData, error, executeRequest } = useGetPosts({ userID: (profilePosts) ? userData.user._id : "" });

    useEffect(() => {
        executeRequest();
    }, [])

    return (
        <div className={`mx-5 mb-8 ${props.className}`}>
            <h1 className="text-5xl hidden sm:block" style={Styles.title}>{title}</h1>
            {isProcessingData && <Spinner className="mt-10" Size="5" Color={themeColors.CardBG_Elevation_Level_01} />}
            {!isProcessingData && error && <p className="ml-1 mt-5 text-xl" style={Styles.error}>Error {error}</p>}
            {!isProcessingData && !error && <div className="mt-6 flex flex-wrap justify-start items-start gap-4">
                {(postsData.posts.length === 0) && <p className="ml-1 mt-3 text-xl" style={Styles.error}>No Posts Found</p>}
                {(postsData.posts.length !== 0) && postsData.posts.map((post) => {
                    return (
                        <PostCardLong openSidePage={openSidePage} key={post._id} isAuthenticatedUserPost={(userData.user._id) ? (userData.user._id === post.owner._id) : false}
                        postID={post._id} postPic={post.img} postCreationDate={post.createdAt} postAdmires={post.admiresCount} isPostAdmired={false}
                        postTitle={post.title} postHashtags={post.hashtags} postDescription={post.description}
                        profilePic={(post.owner.img) ? post.owner.img : placeholderPic} profileName={post.owner.username} />         
                    );
                })}
                {/* <PostCardLong openSidePage={openSidePage} isAuthenticatedUserPost={true}
                        postID="1" postPic={placeholderPic} postCreationDate={"2021-1-1"} postAdmires="0" isPostAdmired={false}
                        postTitle="Post Title" postHashtags="hashtag01, hashtag02" postDescription="lorem ipsum dolor "
                        profilePic={placeholderPic} profileName="Tahir Saeed" />            */}
            </div>}
        </div>
    )
}

export default PostsGrid
