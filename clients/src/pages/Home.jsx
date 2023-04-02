import "../css/home.css"
import img1 from "../images/boy.jpg"
import Navbar from "./navbar/Navbar"
import {FiGithub} from "react-icons/fi"
import {ImLinkedin2 } from "react-icons/im"
import Typewriter from "typewriter-effect"
import {BsInstagram ,BsFillTrophyFill ,BsCodeSlash} from "react-icons/bs"
import {FaAward, FaFacebookF} from "react-icons/fa"
import {BiTask} from "react-icons/bi"
// import { Link } from "react-router-dom" 
import Contact from "./contact/Contact"
// import Education from "./education/Education"
import Award from "./Award/Award"
import Project from "./project/Project"
import Services from "./Services/Services"
import resume from "./resume (2).pdf"
export default function Home(){
    return(
        <div>
            <Navbar/>
            <div className="frontpart">
                <div className="front1">
                <h4>Hi , I'm Rohit Rathod</h4>
                <h2 style={{marginBottom:"40px" ,display:"flex"}}><span style={{marginRight:"10px"}}>A</span><Typewriter options={{autoStart:true,loop:true,delay:40,strings:[
                  " Web Developer",
                  " Web Designer",
                  " Graphic Designer"
                ]}}/></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora accusantium illo qui provident placeat voluptatem asperiores aliquid hic dicta.</p>                
                 <div className="read">
                    <button style={{marginRight:"15px"}}>Read More</button>
                    <a href={resume}><button>Download</button></a>
                </div>
                <br />
                <h4 className="h4">Connect with me</h4>
                <br />
                <div className="connect">
                    <span className="git"><FiGithub/></span>
                    <span className="linked"><ImLinkedin2/></span>
                    <span className="insta"><BsInstagram/></span>
                    <span className="face"><FaFacebookF/></span>
                </div>
                </div>
                <div className="front2">
                    <img src={img1} alt="" />
                </div>
            </div>
    <div className="hireme">
      <h1>Why Hire Me</h1>
      <br />
      <div className="choose">
        <div className="choosebox">
          <div className="chooseicon">
            <span><BiTask/></span>
          </div>
          <div className="choosecont">
            <h1>20+</h1>
            <h2>Projects</h2>
          </div>
        </div>
        <div className="choosebox">
          <div className="chooseicon">
            <span><BsFillTrophyFill/></span>
          </div>
          <div className="choosecont">
            <h1>10+</h1>
            <h2>Certificates</h2>
          </div>
        </div>
        <div className="choosebox">
          <div className="chooseicon">
            <span><FaAward/></span>
          </div>
          <div className="choosecont">
            <h1>3+</h1>
            <h2>Internship</h2>
          </div>
        </div>
        <div className="choosebox">
          <div className="chooseicon">
            <span><BsCodeSlash/></span>
          </div>
          <div className="choosecont">
            <h1>5+</h1>
            <h2>Languages known</h2>
          </div>
        </div>
      </div>
    </div>
    <Services/>

            <Award/>
            <Project/>
            <br />
            <div className="experience">
              <h1>Experience</h1>
              <hr className="hr"/>
              <h2>Fresher</h2>
            </div>
            <br /><br />
            <Contact/>
        </div>
    )
}