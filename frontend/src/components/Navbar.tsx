import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


function Navbar() {
  const [click, setClick] = useState(false);
  //เมื่อถูกคลิกจะเป็น trun
  const hendleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
  <nav className="nav">
    <li className="logo"><a>THANSIRI</a></li>
    <ul className={click ? "menu active" : "menu"}>
      <Link to="/"><li className="item" onClick={closeMobileMenu}><a className="nav_link">Home</a></li></Link>
      <Link to="/About"><li className="item" onClick={closeMobileMenu}><a className="nav_link">About</a></li></Link>
      <Link to="/Project"><li className="item" onClick={closeMobileMenu}><a className="nav_link">Project</a></li></Link>
      <Link to="/Contact"><li className="item" onClick={closeMobileMenu}><a className="nav_link">Contact</a></li></Link>
    </ul>
    <div className="Mobile-Menu" onClick={hendleClick}>
      {click ?(
         <li><a className="IconClear"><ClearIcon sx={{ fontSize: 30}}></ClearIcon></a></li>
      ):(
        <li><a className="IconMenu"><MenuIcon sx={{ fontSize: 30, }}></MenuIcon></a></li>
        //ไม่คลิ๊ก
      )}
     
    </div>
  </nav>
  );
}

export default Navbar;