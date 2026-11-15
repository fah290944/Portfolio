import Button from "@mui/material/Button";
import React from "react";
import ParticleBg from '../components/ParticleBg';
import pf from '../image/pf.png';
import Gmail from '../image/Gmail_Logo_512px.png';
import Linkedin from '../image/linkedin-logo.jpg';
import Github from '../image/github-white.png';
import '../style/home.scss'
import { Link as RouterLink } from "react-router-dom";


function Home() {
  
  const datatext = [
    { title: "Thansiri Suphimon" },
    { title: "Computer Engineering" },
    { title: "Software Engineering" },
    { title: "Frontend Developer" }
  ];

  const subtitle = "Responsible for Frontend Developer work, which develops websites or applications and creates websites that are good and functional as designed Front-End";


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
              {/* <Button className="btn-download" href="/resume/CV-Thansiri-Suphimon.pdf" variant="outlined" style={{ marginRight: "15px", width: "140px", height: "45px", fontSize: "13px" ,fontWeight: 600,borderRadius: "30px",border: "2px solid #9f9f9f",color: "white"}} download>DOWNLOAD CV</Button>
              <Button className="btn-about-me" component={RouterLink} to="/AboutMe" variant="contained" style={{ width: "140px", height: "45px", fontSize: "13px" ,fontWeight: 600,borderRadius: "30px",backgroundColor: "#FC6D6D"}}>ABOUT ME</Button> */}
              <Button
  className="btn-download"
  href="/resume/CV-Thansiri-Suphimon.pdf"
  variant="outlined"
  download
  sx={{
    mr: "15px",
    width: "140px",
    height: "45px",
    fontSize: "13px",
    fontWeight: 600,
    borderRadius: "30px",
    border: "2px solid #9f9f9f",
    color: "white",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "white",
      color: "#121212 !importantก",
      border: "2px solid white",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(255,255,255,0.2)",
    },
  }}
>
  DOWNLOAD CV
</Button>

<Button
  className="btn-about-me"
  component={RouterLink}
  to="/AboutMe"
  variant="contained"
  sx={{
    width: "140px",
    height: "45px",
    fontSize: "13px",
    fontWeight: 600,
    borderRadius: "30px",
    backgroundColor: "#FC6D6D",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#E85555",
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(252,109,109,0.4)",
    },
  }}
>
  ABOUT ME
</Button>            
            </div>
            <div className="img-social">
              <div className="github">
                <a href="https://github.com/fah290944" >
                  <img className="img-github" src={Github} alt="GitHub profile" width="65px" height="65px"></img>
                </a>
              </div>
              <div className="email">
                <img className="img-email" src={Gmail} alt="Gmail" width="45px" height="40px"></img>
              </div>
              <div className="linkin">
                <a href="https://www.linkedin.com/in/thansiri-suphimon-881135276/">
                  <img className="img-linkin"  style={{borderRadius: "50%"}} src={Linkedin} alt="LinkedIn profile" width="70px" height="70px"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="tem-rigth">
            <div className='box-profile-img'>
              <img className='profile-img img-fluid' src={pf} alt="Thansiri Suphimon"></img>
            </div>
          </div>
          
        </div>
    </div>
  );

}

export default Home;