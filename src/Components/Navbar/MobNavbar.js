import React, { useState } from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { TbRoad } from "react-icons/tb";
import { MdOutlinePhotoFilter, MdAddChart } from "react-icons/md";
import Logo from "../../Assets/logo-main.svg";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function MobNavbar() {
  const [openNav,setOpenNav] =useState(false)

  const handleClick =()=>{
    setOpenNav(!openNav)
  }
  return (
    <div className="mob-menu">
      <nav className="mob-nav">
        <div className="mnav-logo">
          <img src={Logo} alt="" />
        </div>
        <a href="#open" className="menubar" onClick={handleClick}>
          <RiBarChartHorizontalLine />
        </a>
      </nav>
      <div className={openNav? "float-nav active-mob":'d-none'}>
        <div className="nav-box">
        <ul>
          <li>
            <a href="#home"><RiHomeSmile2Line /></a>
            
          </li>
          <li>
            <a href="#eco"> <CiGlobe /></a>
           
          </li>
          <li>
            <a href="#tokonomic">  <MdAddChart/></a>
          
          </li>
          <li>
            <a href="#roadmap"><TbRoad /></a>
            
          </li>
          <li>
            <a href="#gallery"><MdOutlinePhotoFilter/></a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default MobNavbar;
