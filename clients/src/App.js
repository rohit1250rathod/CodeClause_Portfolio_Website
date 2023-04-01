// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
// import About from './pages/About';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
// import Finduser from './pages/finduser/Finduser';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/finduser" element={<Finduser/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
