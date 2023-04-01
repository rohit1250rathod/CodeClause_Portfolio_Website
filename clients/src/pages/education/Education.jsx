import "./education.css"
// import img1 from "../../images/boy.jpg"
import { FaUniversity } from "react-icons/fa"
export default function Education(){
    return(
        <div className="education">
            <h1>Education</h1>
            <div className="edutable">
                
                <div className="eduflex">
                    <div className="schoolimg">
                        {/* <img src={img1} alt="" /> */}
                        <span className="uni"><FaUniversity/></span>
                    </div>
                    <div className="schoolname">
                        <h3>XYZ University</h3>
                        <h5>Field</h5>
                    </div>
                    <div className="schoolyear">
                        <span>2018-2019</span>
                    </div>
                    <div className="schoolgrade">
                        <span>80%</span>
                    </div>
                </div>
                <div className="eduflex">
                    <div className="schoolimg">
                    <span className="uni"><FaUniversity/></span>
                    </div>
                    <div className="schoolname">
                        <h3>XYZ University</h3>
                        <h5>Field</h5>
                    </div>
                    <div className="schoolyear">
                        <span>2018-2019</span>
                    </div>
                    <div className="schoolgrade">
                        <span>80%</span>
                    </div>
                </div>
                <div className="eduflex">
                    <div className="schoolimg">
                    <span className="uni"><FaUniversity/></span>
                    </div>
                    <div className="schoolname">
                        <h3>XYZ University</h3>
                        <h5>Field</h5>
                    </div>
                    <div className="schoolyear">
                        <span>2018-2019</span>
                    </div>
                    <div className="schoolgrade">
                        <span>80%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}