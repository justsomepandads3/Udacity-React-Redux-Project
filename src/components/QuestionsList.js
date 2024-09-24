import { useSelector } from "react-redux"
import QuesitonsCard from "./QuesionCard"
import { useNavigate } from "react-router-dom"
 

const QuestionsList = (props) =>{
    let questions= Object.values(useSelector(state => state.questions)).sort(
        (a, b) => b.timestamp-a.timestamp
    );
    const authedUser = useSelector(state => state.authedUser);
    const nav = useNavigate("")
    
    const toQuestion = (e, id) =>{
        e.preventDefault();
        nav(`/question/${id}`);
    }


    //Logic for Unanswered questions and answered questions
    const questionList= () =>{
        questions =  questions.filter(question => !question.optionOne.votes.includes(`${authedUser}`) && !question.optionTwo.votes.includes(`${authedUser}`))
        
    }
    const doneQuestionsList = () =>{
      questions =  questions.filter(question => question.optionOne.votes.includes(`${authedUser}`) || question.optionTwo.votes.includes(`${authedUser}`))
      
      
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

export default QuestionsList;