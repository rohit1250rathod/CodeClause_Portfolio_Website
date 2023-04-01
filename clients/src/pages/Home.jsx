import "../css/home.css"
import img1 from "../images/boy.jpg"
import Navbar from "./navbar/Navbar"
import {FiGithub} from "react-icons/fi"
import {ImLinkedin2 } from "react-icons/im"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import Education from "./education/Education"
import Award from "./Award/Award"
export default function Home(){
    return(
        <div>
            <Navbar/>
            <div className="frontpart">
                <div className="front1">
                <h4>Hi , I'm Rohit Rathod</h4>
                <h2 style={{marginBottom:"40px"}}>A Web Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora accusantium illo qui provident placeat voluptatem asperiores aliquid hic dicta.</p>
                
                 <div className="read">
                    <button>Read More</button>
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
            
            <Education/>
            <Award/>
        </div>
    )
}