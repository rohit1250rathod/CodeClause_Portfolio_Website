// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
// import About from './pages/About';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Blog from "./pages/blog/Blog"
import CreateBlog from './pages/blog/CreateBlog';
import Award1 from './pages/Award/Award1';
import Project1 from './pages/project/Project1';
import Contact1 from './pages/contact/Contact1';
// import Finduser from './pages/finduser/Finduser';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/create" element={<CreateBlog />} />
        <Route exact path="/award" element={<Award1/>}/>
        <Route exact path="/project" element={<Project1/>}/>
        <Route exact path="/contact" element={<Contact1/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/finduser" element={<Finduser/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
