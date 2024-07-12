import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { title } from "process";


function Navbar() {
  const [click, setClick] = useState(false);
  const [clickActive, setclickActive] = useState(true);
  //เมื่อถูกคลิกจะเป็น trun
  const hendleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const hendleClickActive = (index: number) => {
    //console.log(pathData[index].statusActive)
    const newArray = pathData.map((item, i) => {
      if (index === i) {
        return { ...item, statusActive: true };
      } else {
        return { ...item, statusActive: false };
      }
    });
    setPathData(newArray);
  };

  const [pathData, setPathData] = useState([
    {path:"/", title:"Home" ,statusActive: true},
    {path:"/AboutMe", title:"About Me",statusActive: false},
  ]);

  const location = useLocation();

  useEffect(()=>{
    console.log("pathData ==>", pathData)
  },[pathData])

  useEffect(()=>{
    const newData = pathData
    for (const data of newData){
      if (location.pathname == data.path){
        data.statusActive = true
      }else{
        data.statusActive = false
      }
    }
    console.log("newData",newData)
    setPathData([...newData])
  },[])


  return(
  <nav className="nav">
      <li className="logo"><a>THANSIRI</a></li>
      <ul className={click ? "menu active" : "menu"}>
      { pathData.map((data,index) => 
        (<Link to={data.path} key={index}>
          <li className="item" onClick={closeMobileMenu}>
            <a className={data.statusActive ? "active" : "nav_link"} onClick={() => {hendleClickActive(index)}}>
              {data.title}
            </a>
          </li>
        </Link>)
      )}
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