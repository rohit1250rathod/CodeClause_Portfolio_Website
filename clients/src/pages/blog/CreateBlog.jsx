import { useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import blog3 from "../../images/blog2.jpg"
import "./createBlog.css"
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5001/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5001/api/posts", newPost);
      res.data && alert("blog posted successfully");
      window.location.replace("/blog");
    } catch (err) {}
  };
  return (
    <>
    <Navbar/>
    <div className="write" >
      <div className="bloghead">
        <img src={blog3} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="titleinput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className="textinput">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="textareainput"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <br />
        <label htmlFor="fileInput">
          <span className="uploadfile">
            <FaUpload /> choose a file
          </span>
        </label>
        <br />
        {file && (
          <img className="blogimg" src={URL.createObjectURL(file)} alt="" />
        )}
        <br />
        <button type="submit" className="buttonblog">
          Publish
        </button>
      </form>
      <br />
      <br />
    </div>
    </>
  );
}
