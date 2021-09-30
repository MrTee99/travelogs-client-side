import React from 'react'
import CSS from "./DancingDivs.module.scss"

const DancingDivs = ({ className }) => {
    return (
        <div className={`w-full h-3 flex flex-row absolute overflow-hidden ${className}`}>
            <div className={`${CSS["base"]} ${CSS["yellow"]} ${CSS["yellowAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["green"]} ${CSS["greenAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["purple"]} ${CSS["purpleAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["peach"]} ${CSS["peachAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["blue"]} ${CSS["blueAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["yellow"]} ${CSS["yellowAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["green"]} ${CSS["greenAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["purple"]} ${CSS["purpleAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["peach"]} ${CSS["peachAnim"]}`}></div>
            <div className={`${CSS["base"]} ${CSS["blue"]} ${CSS["blueAnim"]}`}></div>
        </div>
    )
}

export default DancingDivs
