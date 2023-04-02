// import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { ImLinkedin2 } from "react-icons/im";
import blog from "../../images/blog.jpg"
import "./blog.css"
export default function Post({ post }) {
  const PF = "http://localhost:5001/images/";
  return (
    <div className="blog-container">
      <div className="blog-container-box">
        <div className="blog-container-box-img">
          <div className="date">
          <span>{new Date(post.createdAt).toDateString().split(' ').slice(1).join(' ')}</span>
          </div>
          {post.photo && <img src={PF + post.photo} className="postphoto" alt="" />}
          {!post.photo && <img src={blog} className="postphoto" alt="" />}
        </div>
        <div className="blog-container-box-content">
          <div className="blog-container-box-content-cont">
            <h2 style={{fontFamily:"cursive",fontWeight:"200"}}>{post.title}</h2>
            {/* <hr /> */}
            <p className="postdesc">{post.desc}</p>
            
            <hr className="hrr" />
            
            <div className="share">
            <h4>Share :</h4>
            <span className="twit">
              <AiOutlineTwitter />
            </span>
            <span className="tele">
              <FaTelegramPlane />
            </span>
                    <span className="insta"><BsInstagram/></span>
                    <span className="face"><FaFacebookF/></span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
