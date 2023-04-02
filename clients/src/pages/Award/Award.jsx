import { BsFillTrophyFill } from "react-icons/bs";
import "./Award.css"
export default function Award(){
    return(
        <div className="awards">
            <h1>Awards</h1>
            <div className="award">
                <div className="awardflex">
                    <div className="awardbox">
                        <div className="awardicon">
                        <span><BsFillTrophyFill/></span>
                        </div>
                        <div className="awarddate">
                            <h4>march</h4>
                            <h3>2023</h3>
                        </div>
                        <div className="awardname">
                            <h2>Hackathon</h2>
                        </div>
                        <div className="awardpart">
                            <h4>Participate</h4>
                        </div>
                    </div>
                    <div className="awardbox">
                        <div className="awardicon">
                        <span><BsFillTrophyFill/></span>
                        </div>
                        <div className="awarddate">
                            <h4>January</h4>
                            <h3>2023</h3>
                        </div>
                        <div className="awardname">
                            <h2>Hackathon</h2>
                        </div>
                        <div className="awardpart">
                            <h4>Participate</h4>
                        </div>
                    </div>
                    <div className="awardbox">
                        <div className="awardicon">
                        <span><BsFillTrophyFill/></span>
                        </div>
                        <div className="awarddate">
                            <h4>march</h4>
                            <h3>2023</h3>
                        </div>
                        <div className="awardname">
                            <h2>Webathon</h2>
                        </div>
                        <div className="awardpart">
                            <h4>Winner</h4>
                        </div>
                    </div><div className="awardbox">
                        <div className="awardicon">
                        <span><BsFillTrophyFill/></span>
                        </div>
                        <div className="awarddate">
                            <h4>march</h4>
                            <h3>2023</h3>
                        </div>
                        <div className="awardname">
                            <h2>Hackathon</h2>
                        </div>
                        <div className="awardpart">
                            <h4>Participate</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}