import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png"
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" /> 
      <div className="desktopmenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitemlist">Home</Link>
        <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuitemlist">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuitemlist">Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuitemlist">Clients</Link>
      </div>
      <button className="desktopmenuBtn" onClick={()=>{
        document.getElementById("contact").scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contactImg} alt="" className="desktopmenuImg" />
        Contact Me
      </button>
      <img src={menu} alt="menu" className="mobmenu" onClick={()=>setShowmenu(!showmenu)}/> 
      <div className="navmenu" style={{display: showmenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>Home</Link>
        <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>Clients</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setShowmenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
