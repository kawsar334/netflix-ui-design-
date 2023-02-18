import { useEffect } from "react";
import { useState } from "react";
import "./navbar.scss" ;
import {Link} from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsscrolled] = useState(false)
  const [open, setOpen] = useState(false)
 
  
  const scroll = ()=>{
      window.scrollY>0 ? setIsscrolled(true):setIsscrolled(false)
  }
 
useEffect(()=>{
  window.addEventListener("scroll",scroll)
  return ()=>{
    window.removeEventListener("scroll",  scroll)
  }

},[]);
  return (
    <div className={isScrolled ?"navbar scrolled":"navbar"}>
      <div className="navcontainer">
        <div className="left">
          < img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <><span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
            <span>My List</span></>

        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <span>KID</span>
          <i className="fa-regular fa-bell icon"></i>
          < img src="../imgs/fab.png" alt="" onMouseOver={() => setOpen(!open)} />
          <i className="fa-solid fa-chevron-down icon" onMouseOver={() => setOpen(!open)}></i>
                  
          {open && <div className="options" >
            <Link to="/login">Login</Link>
            <Link to="/login">register</Link>

          </div>
}
        </div>
      </div>
  

          
         
    </div>
  )
}

export default Navbar