import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import CompletedStat from "./CompletedStat";
import avatarDefault from "../utils/profile-default-svgrepo.svg"
import {withRouter} from  "../utils/helpers"
import { useNavigate } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/questions";


const Question = (props) =>{
    
    const qid =props.id;
    const authedUser = props.authedUser;
    
    const completeQuestion = (info) => {


        props.dispatch(handleSaveQuestionAnswer(info))
        props.changeIsDone()
        
    }
    
    
    console.log(props.user.answers[props.id])

    return(
        <div className="question-page-background">
            {props.isDone ?   
                <div className="question-page-container">
                   <h1 className="question-page-creator">Poll by {props.author}</h1>
                   <img className="question-page-creator-img" src={avatarDefault}></img>
                    {
                        props.user.answers[props.id]==="optionOne" ? 
                        <div className="quesiton-page-selction-container">
                            <h1 >Your Selected answer is: </h1>
                            <div className="question-page-options-selected">
                                
                                <button id="optionOne" className="question-page-option-selected" >
                                    <p>{props.question[0].optionOne.text}</p>
                                </button>
                                <button id="optionTwo" className="question-page-option-notSelected" >
                                    <p>{props.question[0].optionTwo.text}</p>
                                </button>
                                </div>
                                <CompletedStat id={props.id} option={"optionOne"}></CompletedStat>
                                
                             
                        </div>
                        :
                        <div className="quesiton-page-selction-container">
                            <h1 >Your Selected answer is: </h1>
                            <div className="question-page-options-selected">
                            
                            
                            <button id="optionOne" className="question-page-option-notSelected" >
                                   
                                <p>{props.question[0].optionOne.text}</p>
                            </button>
                            <button id="optionTwo" className="question-page-option-selected" >
                                <p>{props.question[0].optionTwo.text}</p>
                            </button>
                            </div>
                            <CompletedStat id={props.id} option={"optionTwo"}></CompletedStat>
                            
                            
                        </div> 
                    }
                </div>
                
                :
               
                
                    <div className="question-page-container">
                        <h1 className="question-page-creator">Poll by {props.author}</h1>
                        <img className="question-page-creator-img" src={avatarDefault}></img>
                        
                        <div >
                            <h1 className="question-page">Would You Rather</h1>
                            <div className="question-page-options">
                                <button id="optionOne" className="question-page-option" onClick={e => {
                                    const answer = "optionOne"
                                    completeQuestion({answer,qid, authedUser})}}>
                                    <p>{props.question[0].optionOne.text}</p>
                                    
                                </button>
                                <button id="optionTwo" className="question-page-option" onClick={e => {
                                     const answer = "optionTwo"
                                     completeQuestion({answer,qid, authedUser})
                                }}>
                                    <p>{props.question[0].optionTwo.text}</p>
                                    
                                </button>
                            </div>
                        </div>

                    </div> 
               
                
            }
        </div>
    )
}

const mapStateToProps = ({users, questions, authedUser}, props) =>{
    const { id } = props.router.params;
    
    
    const question = Object.values(questions).filter(question => question.id===id);
    const author = questions[id].author
    const optionOne =question[0].optionOne.votes;
    const optionTwo =question[0].optionTwo.votes;
    const user = users[authedUser]
    
    let isDone = false;
    if(optionOne.includes(`${authedUser}`) || optionTwo.includes(`${authedUser}`)){isDone = true;}
    
    const changeIsDone = () =>{
        isDone=!isDone;
    }
    
    return{
        id,
        question,
        author,
        authedUser,
        isDone,
        user,
        changeIsDone,
       
       

    }
}
export default withRouter(connect(mapStateToProps)(Question));