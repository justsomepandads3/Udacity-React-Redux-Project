import { connect, useDispatch, useSelector } from "react-redux";
import CompletedStat from "./CompletedStat";
import avatarDefault from "../utils/profile-default-svgrepo.svg"
import {withRouter} from  "../utils/helpers"
import { handleSaveQuestionAnswer } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PageNotFound from "./PageNotFound";

const Question = (props) =>{
    const authedUser = useSelector(state => state.authedUser)
    const nav = useNavigate(``)
    
    const {id}= props.router.params;
    const questions = Object.values(useSelector(state => state.questions))
    const question = questions.filter(question => question.id===id)[0];
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const user = users[authedUser] 
    const completeQuestion = (info) => {
        dispatch(handleSaveQuestionAnswer(info))
    }
    

    return(
        <div>{ 
            question ? 
           
            <div className="question-page-background">
                
                {
                question.optionOne.votes.includes(`${authedUser}`) || question.optionTwo.votes.includes(`${authedUser}`) ?   
                    <div className="question-page-container">
                    <h1 className="question-page-creator">Poll by {question.author}</h1>
                    <img className="question-page-creator-img" src={user.avatar ? user.avatar: avatarDefault} alt="user profile picture"></img>
                        {
                            user.answers[id]==="optionOne" ? 
                            <div className="quesiton-page-selction-container">
                                <h1 >Your Selected answer is: </h1>
                                <div className="question-page-options-selected">
                                    
                                    <button id="optionOne" className="question-page-option-selected" >
                                        <p>{question.optionOne.text}</p>
                                    </button>
                                    <button id="optionTwo" className="question-page-option-notSelected" >
                                        <p>{question.optionTwo.text}</p>
                                    </button>
                                    </div>
                                    <CompletedStat id={id} option={"optionOne"}></CompletedStat>
                                    
                                
                            </div>
                            :
                            <div className="quesiton-page-selction-container">
                                <h1 >Your Selected answer is: </h1>
                                <div className="question-page-options-selected">
                                
                                
                                <button id="optionOne" className="question-page-option-notSelected" >
                                    
                                    <p>{question.optionOne.text}</p>
                                </button>
                                <button id="optionTwo" className="question-page-option-selected" >
                                    <p>{question.optionTwo.text}</p>
                                </button>
                                </div>
                                <CompletedStat id={id} option={"optionTwo"}></CompletedStat>
                                
                                
                            </div> 
                        }
                    </div>
                    
                    :
                
                    
                        <div className="question-page-container">
                            <h1 className="question-page-creator">Poll by {question.author}</h1>
                            <img className="question-page-creator-img" src={user.avatar ? user.avatar: avatarDefault} alt="user profile picture"></img>
                            
                            <div >
                                <h1 className="question-page">Would You Rather</h1>
                                <div className="question-page-options">
                                    <button id="optionOne" className="question-page-option" onClick={e => {
                                        const answer = "optionOne"
                                        completeQuestion({authedUser,answer,qid: id})
                                    }}>
                                        <p>{question.optionOne.text}</p>
                                        
                                    </button>
                                    <button id="optionTwo" className="question-page-option" onClick={e => {
                                        const answer = "optionTwo"
                                        completeQuestion({authedUser,answer,qid: id})
                                    }}>
                                        <p>{question.optionTwo.text}</p>
                                        
                                    </button>
                                </div>
                            </div>

                        </div> 
                
                    
                }
            </div> 
            :
            <PageNotFound></PageNotFound>
            }   
        </div> 
   )
}
export default withRouter(Question);