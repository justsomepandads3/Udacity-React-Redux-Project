import QuestionsList from "./QuestionsList";

const Dashboard = (props) =>{
    return(
        <div>
            <div className="unanswered">
            <QuestionsList title={"Unanswered"}></QuestionsList>
            </div>
            <div className="answered">
            <QuestionsList title={"Answered"}></QuestionsList>
            </div>
        </div>
    )
}
export default Dashboard;
