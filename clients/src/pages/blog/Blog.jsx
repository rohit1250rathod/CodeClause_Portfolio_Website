import axios from "axios";
import { useState, useEffect} from "react";
import Navbar from "../navbar/Navbar"
import Post from "./Post.jsx";
import "./blog.css"
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:5001/api/posts");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
    <Navbar/>
    <section className="blog-page">
      <div className="blog-page-cont">
        <h1>My Posts</h1>
        {blogs.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </section>
    {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tenetur quia molestias ex, suscipit dolorum itaque sapiente odit dignissimos non, tempore fuga quisquam obcaecati commodi accusamus ullam tempora temporibus enim! Ipsa, sequi!
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam itaque, alias aliquam sapiente perferendis harum, voluptatum expedita eius voluptate tempora exercitationem accusantium dolor doloremque autem qui assumenda numquam, maiores esse. Sunt consequatur totam a deserunt assumenda molestias dolores dignissimos cum ut atque!
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat qui excepturi adipisci tenetur molestiae similique dolor. Officiis accusantium cumque quasi ut quisquam inventore, dignissimos possimus quia itaque eveniet unde? */}
    </div>
  );
}
