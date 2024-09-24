import QuestionsList from "./QuestionsList";
import { useState } from "react";
const Dashboard = (props) =>{
    const [cat, setCat] = useState("Unanswered")
    
    const updateCat = (cat) =>{
        setCat(cat)
    }
    return(
        <div>
            <button id="Unanswered" className="dashboard-button" onClick={e => updateCat(e.target.id)}><h2>Unanswered Polls</h2></button>
            <button id="Answered" className="dashboard-button" onClick={e => updateCat(e.target.id)}><h2>Answered Polls</h2></button>
           {cat==="Unanswered" ? 
            <div className="unanswered">
            <QuestionsList title={"Unanswered"}></QuestionsList>
            </div>
            :
            <div className="answered">
            <QuestionsList title={"Answered"}></QuestionsList>
            </div>
            }
            
            
            
        </div>
    )
}
export default Dashboard;
