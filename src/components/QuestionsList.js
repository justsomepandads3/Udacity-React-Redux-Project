import { connect } from "react-redux"
import QuesitonsCard from "./QuesionCard"
import { useNavigate } from "react-router-dom"
import quesitons from "../reducers/questions"
 

const QuestionsList = (props) =>{
    const nav = useNavigate("")
    let questions= props.quesitonsNotSorted;
    
    const toQuestion = (e, id) =>{
        e.preventDefault();
        nav(`/question/${id}`);
    }


    //Logic for Unanswered questions and answered questions
    const questionList= () =>{
        questions =  questions.filter(question => !question.optionOne.votes.includes(`${props.authedUser}`) && !question.optionTwo.votes.includes(`${props.authedUser}`))
        
    }
    const doneQuestionsList = () =>{
      questions =  questions.filter(question => question.optionOne.votes.includes(`${props.authedUser}`) || question.optionTwo.votes.includes(`${props.authedUser}`))
      
      
    }
    //====================================================
    return(
        <div className="question-container">
           
                <div className="section">
                
                    <h1>{props.title}</h1>
                    <hr/>
                    {              
                        props.title==="Answered" ? doneQuestionsList() : questionList()
                    }
                        {questions.map(question =>{
                            const {author, id, timestamp} = question;
                            

                            return(
                                <div className="question-card" key={id}>
                                    <QuesitonsCard  id ={id} author={author} timestamp={timestamp}></QuesitonsCard>
                                  
                                    <button className="question-show-button" onClick={(e) => toQuestion(e,id)}>show</button>
                                </div>
                                
                           
                            )
                        })}
                        
                </div>
            
            </div>
            
    )
}
const mapStateToProps = ({questions,authedUser}) =>{
    const quesitonsNotSorted= Object.values(questions).sort(
        (a, b) => b.timestamp-a.timestamp
      )
    return{
        quesitonsNotSorted,
        authedUser,
    }
}
export default connect(mapStateToProps)(QuestionsList)