import React from 'react'
import NavbarBrand from '../Top Navbar/NavbarBrand'
import { useSelector } from 'react-redux';

const AppInfo = ({ ...props }) => {
    const ThemeStyles = useSelector((state) => state.theme);

    // App Description Text
    const appDescription = "Description about app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi neque ipsum, nulla sed deleniti quas inventore repellat ratione magnam natus nesciunt quis eligendi vero debitis sit. Culpa animi hic, voluptates quasi ab nam minima ipsa adipisci recusandae obcaecati mollitia eos tempore dolores ratione laborum velit libero, impedit totam. Rerum!"

    return (
        <div className={`hidden lg:flex justify-center items-center flex-col rounded-xl ${props.className}`} >
            <NavbarBrand Large />
            <p className="mt-5 text-center text-lg" style={{ color: ThemeStyles.Text }}>{appDescription}</p> 
        </div>
    )
}

export default AppInfo
