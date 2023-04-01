import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <section className="header">
            <div className="head1">
            <div className="head">
                <div className="logo">
                    <h1>My Portfolio</h1>
                </div>
            <nav className="nav">
            <ul>
                <Link to=""><li>Home</li></Link>
                <Link to=""><li>Education</li></Link>
                <Link to=""><li>Awards</li></Link>
                <Link to=""><li>Project</li></Link>
                <Link to=""><li>Experience</li></Link>
                <Link to=""><li>Contact</li></Link>                
            </ul>
            </nav>
            </div>
            </div>
        </section>
    )
}