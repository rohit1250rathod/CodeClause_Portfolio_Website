import "./project.css"
import img1 from "../../images/boy.jpg"
import img2 from "../../images/social.jpg"
import img3 from "../../images/ecom.jpg"
import img4 from "../../images/pay.jpg"
import img5 from "../../images/stock.jpg"
import img6 from "../../images/chat.jpg"

import {FiDownload} from "react-icons/fi"
export default function Project(){
    return(
        <div>
            <div className="project">
                <h2> Latest Project</h2>
                <div className="projectflex">
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img2} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>Social Media</h3>
                            </div>
                            <div className="projdomain">
                                <h4>Web development</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img3} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>Ecommerce App</h3>
                            </div>
                            <div className="projdomain">
                                <h4>App Development</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img4} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>Payment Gateway</h3>
                            </div>
                            <div className="projdomain">
                                <h4>Web Development</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img5} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>Stoke Market</h3>
                            </div>
                            <div className="projdomain">
                                <h4>Web Development</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img6} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>ChatBot</h3>
                            </div>
                            <div className="projdomain">
                                <h4>Web Development</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                    <div className="projectbox">
                        <div className="porjectimg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="projectcont">
                            <div className="projtitle">
                                <h3>Title</h3>
                            </div>
                            <div className="projdomain">
                                <h4>Domain</h4>
                            </div>
                            <div className="projbut">
                            <button>Github link...</button>
                            <span><FiDownload/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}