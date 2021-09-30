import React from 'react'
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar'

const Navbar = (props) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      
      <TopNavbar className="fixed z-10 w-full"/>
      <div className="h-full w-full flex-1 relative flex flex-col md:flex-row " style={{ paddingTop: "4.8rem" }}>
        <SideNavbar className="w-full h-auto md:h-full md:w-auto"/>
        <div className="h-full flex mr-0 md:mr-2 flex-1 overflow-hidden">
          {props.children}
        </div>
      </div>

    </div> 
  )
}

export default Navbar
