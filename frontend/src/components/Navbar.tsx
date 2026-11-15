import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const routes = [
  { path: "/", title: "Home" },
  { path: "/AboutMe", title: "About Me" },
];

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <nav className="nav">
      <div className="logo"><a href="/">THANSIRI</a></div>
      <ul id="portfolio-menu" className={click ? "menu active" : "menu"}>
        {routes.map(({ path, title }) => (
          <li className="item" key={path}>
            <NavLink
              to={path}
              end
              className={({ isActive }) => isActive ? "active" : "nav_link"}
              onClick={() => setClick(false)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="Mobile-Menu text-white"
        aria-label={click ? "Close navigation" : "Open navigation"}
        aria-expanded={click}
        aria-controls="portfolio-menu"
        onClick={() => setClick((isOpen) => !isOpen)}
      >
        {click ? <ClearIcon sx={{ fontSize: 30 }} /> : <MenuIcon sx={{ fontSize: 30 }} />}
      </button>
    </nav>
  );
}

export default Navbar;
