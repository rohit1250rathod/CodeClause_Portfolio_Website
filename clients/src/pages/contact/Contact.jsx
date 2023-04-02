import { GrLocation } from "react-icons/gr";
import { AiFillPhone, AiOutlineCopyright, AiOutlineTwitter } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./Contact.css";
import { FaFax } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="Contact">
      {/* <h1>Contact</h1> */}
      <div className="contactus">
        <div className="contactflex">
          <div className="contactbox">
            <div className="contacticon">
              <span>
                <GrLocation />
              </span>
            </div>
            <div className="contactdet">
              <h3>Address</h3>
              <h3>123 , remote location,india</h3>
            </div>
          </div>
          <div className="contactbox">
            <div className="contacticon">
              <span>
                <AiFillPhone />
              </span>
            </div>
            <div className="contactdet">
              <h3>Phone</h3>
              <h3>1234-1234-1234</h3>
            </div>
          </div>
          <div className="contactbox">
            <div className="contacticon">
              <span>
                <FaFax />
              </span>
            </div>
            <div className="contactdet">
              <h3>Fax</h3>
              <h3>123-123-123-12</h3>
            </div>
          </div>
          <div className="contactbox">
            <div className="contacticon">
              <span>
                <MdOutlineEmail />
              </span>
            </div>
            <div className="contactdet">
              <h3>Email</h3>
              <h3>rohitrathod1250 @gmail.com</h3>
            </div>
          </div>
        </div>
        <h3 className="cm">Connect with me</h3>
        <div className="contacticonme">
          <div className="connect">
            <span className="gitt">
              <FiGithub />
            </span>
            <span className="linked">
              <ImLinkedin2 />
            </span>
            <span className="insta">
              <BsInstagram />
            </span>
            <span className="face">
              <FaFacebookF />
            </span>
            <span className="twit">
              <AiOutlineTwitter />
            </span>
            <span className="tele">
              <FaTelegramPlane />
            </span>
          </div>
        </div>
        <hr />
        <div className="contfooter">
        <span><AiOutlineCopyright/></span>
            <span>Copyright @ 2023</span>
        </div>
      </div>
    </div>
  );
}
