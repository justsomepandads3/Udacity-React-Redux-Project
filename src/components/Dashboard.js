import QuestionsList from "./QuestionsList";

const Dashboard = (props) =>{
    return(
        <div >
            <QuestionsList title={"Unanswered"}></QuestionsList>
            <QuestionsList title={"Answered"}></QuestionsList>

        </div>
    )
}
export default Dashboard;
