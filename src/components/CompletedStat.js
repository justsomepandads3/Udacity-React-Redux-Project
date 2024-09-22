import { connect } from "react-redux";
import { withRouter } from "../utils/helpers";
import CompletedStatCard from "./CompletedStatCard";
const CompletedStat = (props) =>{
    let sameOption = 0;
    if(props.option==="optionOne"){
        sameOption = props.question.optionOne.votes.length
    }else{
        sameOption = props.question.optionTwo.votes.length
    }

    return(
        <div className="stat-container">
            <CompletedStatCard title={"Number of people selected same answer: "} stat={sameOption}></CompletedStatCard>
            <CompletedStatCard title={"Total number of Answers: "} stat={props.optionsLength}></CompletedStatCard>
        </div>
    )
}

const mapStateToProps = ({questions, authedUser},props) => {
    const { id } = props.router.params;
    const question=questions[id];
    const optionOne = question.optionOne.votes.length;
    const optionTwo = question.optionTwo.votes.length;
    const optionsLength = optionOne+optionTwo;
   
    return{
        question,
        optionsLength,
        authedUser,

    }
}

export default withRouter(connect(mapStateToProps)(CompletedStat));