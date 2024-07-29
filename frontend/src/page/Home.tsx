import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import ParticleBg from '../components/ParticleBg';
import pf from '../image/pf.png';
import Gmail from '../image/Gmail_Logo_512px.png';
import Linkedin from '../image/linkedin-logo.jpg';
import Github from '../image/github-white.png';
import '../style/home.scss'
import { Link as RouterLink } from "react-router-dom";
import { height, margin } from "@mui/system";


function Home() {
  
  const [datatext, setDataText] = useState([
    { title: "Thansiri Suphimon" },
    { title: "Computer Engineering" },
    { title: "Software Engineering" },
    { title: "Full Stack Developer" }
  ]);

  const [subtitle, setsubtitles] = useState(
    "Responsible for Full Stack Developer work, which develops websites or applications and creates websites that are good and functional as designed, both Back-End and Front-End"
  )


  return (
    <div className="home-containner">
        <ParticleBg/>
        <div className="bg" style={{width: "100%"}}>
          <div className="tem-left pb-[45px]">
            <div className="all-text">
              <div className="first-text">Hello I'm</div>
              <div className="boxtext-containner">
                  <ul className="dynamic-text" >
                      {datatext.map((data) =>
                          (<li><span>{data.title}</span></li>)
                      )}
                  </ul>
              </div>
              <h5 className="third1-text" >{subtitle}</h5>
            </div>
            <div className='btn-all' style={{marginBlockStart: "10px",marginBottom: "30px"}}>
              <Button className="btn-download" href="/resume/CV-Thansiri-Suphimon.pdf" variant="outlined" style={{ marginRight: "15px", width: "140px", height: "45px", fontSize: "13px" ,fontWeight: 600,borderRadius: "30px",border: "2px solid #9f9f9f",color: "white"}} download>DOWNLOAD CV</Button>
              <Button className="btn-about-me" component={RouterLink} to="/AboutMe" variant="contained" style={{ width: "140px", height: "45px", fontSize: "13px" ,fontWeight: 600,borderRadius: "30px",backgroundColor: "#FC6D6D"}}>ABOUT ME</Button>
            </div>
            <div className="img-social">
              <div className="github">
                <a href="https://github.com/fah290944" >
                  <img className="img-github" src={Github} width="65px" height="65px"></img>
                </a>
              </div>
              <div className="email">
                <img className="img-email" src={Gmail} width="45px" height="40px"></img>
              </div>
              <div className="linkin">
                <a href="https://www.linkedin.com/in/thansiri-suphimon-881135276/">
                  <img className="img-linkin"  style={{borderRadius: "50%"}} src={Linkedin} width="70px" height="70px"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="tem-rigth">
            <div className='box-profile-img'>
              <img className='profile-img img-fluid' src={pf}></img>
            </div>
          </div>
          
        </div>
    </div>
  );

}

export default Home;