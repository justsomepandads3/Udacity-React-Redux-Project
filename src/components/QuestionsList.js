import { connect } from "react-redux"
import  {formatDate}  from "../utils/helpers"
import QuesitonsCard from "./QuesionCard"
import authedUser from "../reducers/authedUser"
const QuestionsList = (props) =>{
    
    let questions= Object.values(props.questions)
    
    const questionList= () =>{
        questions =  questions.filter(question => !question.optionOne.votes.includes(`${props.authedUser}`) && !question.optionTwo.votes.includes(`${props.authedUser}`))
        console.log(questions)
    }
    const doneQuestionsList = () =>{
      questions =  questions.filter(question => question.optionOne.votes.includes(`${props.authedUser}`) || question.optionTwo.votes.includes(`${props.authedUser}`))
      
    }
    return(
        <div className="question-container">
           
                <div className="section">
                
                    <h1>{props.title}</h1>
                    {              
                        props.title==="Answered" ? doneQuestionsList() : questionList()
                    }
                        {questions.map(question =>{
                            const {author, id, timestamp, optionOne, optionTwo} = question;
                            

                            return(
                                <div className="question-card">
                                    <QuesitonsCard  id ={id} author={author} timestamp={timestamp}></QuesitonsCard>
                                    
                                    <button className="question-show-button">show</button>
                                </div>
                           
                            )
                        })}
                </div>
            
            </div>
            
    )
}
const mapStateToProps = ({questions,authedUser}) =>{
    return{
        questions,
        authedUser,
    }
}
export default connect(mapStateToProps)(QuestionsList)