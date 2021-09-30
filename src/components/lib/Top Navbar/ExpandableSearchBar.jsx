import React, { useState, useEffect, useRef } from 'react'
import SearchIcon from "../../icons/SearchIcon"
import CrossIcon from "../../icons/CrossIcon"
import { useSelector } from 'react-redux';

const ExpandableSearchBar = ({ searchThis, setIsNavbarOpened }) => {
    const ThemeStyles = useSelector((state) => state.theme);
    const PrimaryColorStyles = useSelector((state) => state.primaryColors);
    
    // Reference of input field to access it via DOM
    const inputFieldRef = useRef();

    // States
    const [searchValue, setSearchValue] = useState('');
    const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
    const [canSeeSearchBarItem, setCanSeeSearchBarItem] = useState(false);
    setIsNavbarOpened(isSearchBarOpened);

    // States Change Handler Func
    const handleInputOnChange = (e) => setSearchValue(e.target.value);
    const handleIsSearchBarOpened = (bool) => setIsSearchBarOpened(bool);

    // CSS Styles
    const Styles = {
        searchBarClasses: (isSearchBarOpened) ? "w-full  sm:w-96" : "w-12",
        searchBarStyle: {
            backgroundColor: ThemeStyles.CardBG_Elevation_Level_02,
            borderColor: PrimaryColorStyles.Color_100,
            justifyContent: (isSearchBarOpened) ? "start" : "center",
            padding: (isSearchBarOpened) ? "0 1rem" : "0"
        },
        searchBarOpenButtonStyle: {
            width: (isSearchBarOpened) ? "auto" : "100%", 
            height: (isSearchBarOpened) ? "auto" : "100%",
            cursor: (isSearchBarOpened) ? "text" : "pointer",
        },
        searchBarOpenStyle: {
            display: (canSeeSearchBarItem) ? "flex" : "none",
            flexDirection: (isSearchBarOpened) ? "row" : "column",
            opacity: (canSeeSearchBarItem) ? "100" : "0"
        },
        divider: { 
            backgroundColor: ThemeStyles.SearchInputDivider 
        },
        searchIconFill: (ThemeStyles.isCurrentThemeDark) ? ThemeStyles.HeadingText : PrimaryColorStyles.Color_100,
    }

    // When Click on Search Icon Btn then Open Search bar (if not opened) else Focus on Search bar
    const onClickSearchIconBtn = () => {
        if(!isSearchBarOpened) handleIsSearchBarOpened(true)
        else inputFieldRef.current.focus()
    }

    // When Press Enter, Trigger Search
    const triggerSearch = (e) => {
        if(e.keyCode === 13) {
            searchThis(e.target.value);
            e.target.blur();
        }
    }

    // Search Bar Open and Close Animation and handle show/hide Divider, Input Field and Cross Btn
    useEffect(()=> {
        if(isSearchBarOpened) setTimeout(() => {
            setCanSeeSearchBarItem(true)
            inputFieldRef.current.focus()
        }, 300)
        else {
            setCanSeeSearchBarItem(false)
            setSearchValue("");
        }
    }, [isSearchBarOpened, canSeeSearchBarItem])


    return (
        <div style={Styles.searchBarStyle} className={`ml-2.5 border-2 h-12 rounded-full flex transition-all duration-200 ease-linear ${Styles.searchBarClasses}`}>

            {/* Search Icon Btn */}
            <button onClick={onClickSearchIconBtn} style={Styles.searchBarOpenButtonStyle}
                    className="flex items-center justify-center transform hover:scale-110 transition-all duration-200 ease-linear">
                <SearchIcon Size="25" Fill={Styles.searchIconFill} className="transform -translate-y-0.5" />
            </button>

            <div className="w-full h-full items-center transition-all" style={Styles.searchBarOpenStyle}>
                
                {/* Divider */}
                <span className="hidden sm:inline mx-3 w-0.5 h-4/6 rounded-full" style={Styles.divider}></span>
                
                {/* Input */}
                <input  type="text" placeholder="Search..."
                        ref={inputFieldRef} onKeyDown={triggerSearch}
                        value={searchValue} onChange={handleInputOnChange}
                        className="mx-1 sm:ml-0 sm:mr-3 bg-transparent flex-auto text-xl outline-none"
                        style={{ color: ThemeStyles.SearchInputText }} />

                {/* Cross Btn */}
                <button onClick={handleIsSearchBarOpened.bind(null, false)} className="transition-all opacity-100">
                    <CrossIcon Size="20" Fill={ThemeStyles.SearchInputCrossIcon} className="hidden sm:block"/>
                    <CrossIcon Size="15" Fill={ThemeStyles.SearchInputCrossIcon} className="block sm:hidden"/>
                </button>

            </div>

        </div>
    )
}

export default ExpandableSearchBar
