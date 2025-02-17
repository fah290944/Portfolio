import React, { useEffect, useState } from "react";
import "../style/aboutMe.scss";
import figma from '../image/figma.png';
import projectend from '../image/projectend.png';
import hotel from '../image/hotel.png';
import edu from '../image/edu.png';
import CardExperience from "../components/CardExperience";
import CardProject from "../components/CardProject";
import Gmail from '../image/Gmail_Logo_512px.png';
import Linkedin from '../image/linkedin-logo.jpg';
import Github from '../image/github-white.png';



function About() {

  const [experience, setExperience] = useState([
    {
      job: "Frontend Developer Co-op",
      time: "17 Jul - 3 Nov 2023",
      company: "Entronica Co., Ltd.,",
      jobDescription: "Responsible for editing the Ul according to the company's specifications and customizing the Ul to make it beautiful.",
      skill: ["Javascript", "Next", "SCSS", "Bootstrap"]
    },
    {
      job: "Job Search website",
      time: "Dec 2023 - Feb 2024",
      company: "Freelance",
      jobDescription: "Responsible for designing UI using Figma and building Frontend according to Figma.",
      skill: ["Javascript", "Next", "SCSS", "Tailwind"]
    },
    {
      job: "Web Application Developer",
      time: "2 Jan - 29 Feb 2024",
      company: "Online Asset Co., Ltd.,",
      jobDescription: "Responsible for building Frontend as assigned.",
      skill: ["Typescript", "Vue", "Nuxt", "Tailwind"]
    },
    {
      job: "Web Developer",
      time: "4 Nov 2024 - 6 Feb 2025",
      company: "Connect Accounting & Advisory Co., Ltd.,",
      jobDescription: "Responsible for Analysis, Design UX/UI using Figma and develop Front-End websites.",
      skill: ["Javascript", "Next", "SCSS", "Bootstrap", "Tailwind"]
    },
  ]);

  const [project, setProject] = useState([
    {
      nameProject: "Efficient Comparison of Algorithms to Predict Diabetes",
      projectDetails: "This project is using application to analyze machine learning data, which brings interesting algorithms to compare their effectiveness in predicting diabetes by Algorithms. that are studied as follows : " +
      "Bayesian Networks, Decision Tree, K-Nearest Neighbor, Support Vector Machine",
      skill: [],
      photo: projectend,
      web: "https://drive.google.com/drive/folders/1U9YRYfn8vsOZDrbRIQgNVbX94VAjENsS?usp=drive_link"
    },
    {
      nameProject: "Hotel Website",
      projectDetails: "The hotel website project for the Software Engineering course is divided into different subsystems, with the assigned responsibility to manage the Employee Management System and the Review System.",
      skill: ["Typescript", "React", "CSS"],
      photo: hotel,
      web: "https://github.com/fah290944/team03"
    },
    {
      nameProject: "Portfolio Website",
      projectDetails: "This project showcases my fundamental skills in using Figma and my ability to translate ideas into an efficient, creative, and truly reflective website design of my identity.",
      skill: ["Figma", "GitHub"],
      photo: figma,
      web: "https://www.figma.com/design/SwO8nQkNRz8J2qbq5vliXH/Portfolio?node-id=0-1&t=nzACG8HsoQywhJSd-1"
    },
  ]);

  return (
    <div className="bg-about-me">
      <div className="letf">
        <div>
          <div className="pb-[20px]">
            <h1 className="font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl 2md:text-3xl md:text-2xl text-[35px]">Thansiri Suphimon</h1>
            <h2 className="mt-3 2xl:text-[40px] xl:text-[35px] lg:text-[28px] 2md:text-[20px] md:text-[18px] text-[25px]">Frontend Developer</h2>
            <p className="mt-4 leading-normal text-[#9B9B9B] 2xl:max-w-[660px] xl:max-w-[350px] lg:max-w-[360px] 2md:max-w-[315px] md:max-w-[265px] max-w-[310px] 2xl:text-[25px] xl:text-[16px] lg:text-[16px] 2md:text-[12px] md:text-[12px] text-[14px]">I want to create websites that are beautiful, challenging and exciting.</p>
          </div>
        </div>

        <div className="mt-4 md:mt-8 2md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8 flex items-center">
          <div className="github-aboutme w-[35px] h-[35px] bg-[#000] mr-[10px] rounded-[50%] flex justify-center items-center">
            <a href="https://github.com/fah290944" >
              <img className="img-github-aboutme w-[35px] h-[35px]" src={Github}></img>
            </a>
          </div>
            <div className="email-aboutme w-[35px] h-[35px] bg-[#fff] mx-[10px] rounded-[50%] flex justify-center items-center">
              <img className="img-email-aboutme w-[22px] h-[20px]" src={Gmail} ></img>
            </div>
            <div className="linkin-aboutme w-[35px] h-[35px] bg-[#fff] mx-[10px] rounded-[50%] flex justify-center items-center">
              <a href="https://www.linkedin.com/in/thansiri-suphimon-881135276/">
                <img className="img-linkin-aboutme w-[35px] h-[35px]"  style={{borderRadius: "50%"}} src={Linkedin}></img>
              </a>
            </div>
        </div>

      </div>

      <div id="rigth" className="rigth">
        <div>
          <div className="bg-education pb-[40px]">
            <h2 className="pb-[20px] md:pl-[20px] 2md:pl-[20px] lg:pl-[20px] xl:pl-[20px] 2xl:pl-[20px] text-[15px] md:text-[12px] 2md:text-[13px] lg:text-[14px] xl:text-[16px]">EDUCATION</h2>
            <div className="container-education">
              <img src={edu} alt="" className="image-edu" />
              <div className="overlay">
                <div className="text">
                  <div className="text-[14px] md:text-[14px] 2md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px]">Education</div>
                  <p className="text-[12px] md:text-[10px] 2md:text-[14px] lg:text-[16px] 2xl:text-[16px]">Suranaree University of Technology</p>
                  <p className="text-[12px] md:text-[10px] 2md:text-[14px] lg:text-[16px] 2xl:text-[16px]">Bachelor of Engineering (Computer Engineering)</p>
                  <p className="text-[12px] md:text-[10px] 2md:text-[14px] lg:text-[16px] 2xl:text-[16px]">2020 - 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-experience pb-[40px]">
            <h2 className="md:pl-[20px] 2md:pl-[20px] lg:pl-[20px] xl:pl-[20px] 2xl:pl-[20px] pb-[20px] text-[15px] md:text-[12px] 2md:text-[13px] lg:text-[14px] xl:text-[16px]">EXPERIENCE</h2>
            {experience.map((data,index) =>
            (
              <CardExperience data={data} key={index}></CardExperience>
            )
            )}
          </div>
          <div className="bg-projects pb-[50px]" >
            <h2 className="md:pl-[20px] 2md:pl-[20px] lg:pl-[20px] xl:pl-[20px] 2xl:pl-[20px] pb-[20px] text-[15px] md:text-[12px] 2md:text-[13px] lg:text-[14px] xl:text-[16px]" >PROJECTS</h2>
            {project.map((data,index) =>
            (
              <CardProject data={data} key={index} ></CardProject>
            )
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
