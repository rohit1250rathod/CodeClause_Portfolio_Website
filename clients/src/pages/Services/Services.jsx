import { AiFillHtml5 } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import "./services.css"
export default function Services(){
    return(
        <div className="services">
        <h2>Our Services</h2>
        <hr  className="hr"/>
        <div className="servicesflex">
            <div className="servicesbox">
                <div className="servicesicon">
                    <AiFillHtml5/>
                </div>
                <div className="servicescont">
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>ReactJs</li>
                    </ul>
                </div>
            </div>
            <div className="servicesbox">
                <div className="servicesicon">
                    <BsFillDatabaseFill/>
                </div>
                <div className="servicescont">
                    <ul>
                        <li>Sql</li>
                        <li>Mysql</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
            </div>
            <div className="servicesbox">
                <div className="servicesicon">
                    <FaServer/>
                </div>
                <div className="servicescont">
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
            </div>       
        </div>
    )
}