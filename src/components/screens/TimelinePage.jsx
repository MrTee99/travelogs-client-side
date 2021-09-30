import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostsGrid from '../lib/Posts Grid/PostsGrid'
import PostForm from '../lib/Post Form/PostForm';
import { uiActions } from '../../store/ui_slice/ui-slice';

const TimelinePage = () => {
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
        <div className="w-full h-full  overflow-x-hidden">
            <div className="w-full h-full flex transition-all" style={style}>
                <div className="w-full flex-shrink-0 overflow-y-scroll">
                    <PostsGrid className="mt-3 md:mt-8" title="Timeline" openSidePage={handleOpenSidePage} />
                </div>
                <div className="w-full h-full flex-shrink-0 overflow-y-hidden relative">
                    {openSidePage && <PostForm isUpdating title="Editting Post" formValues={editablePostData}/>}
                </div>
            </div>
        </div>
    )
}

export default TimelinePage
