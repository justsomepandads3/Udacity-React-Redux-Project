import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import avatarDefault from "../utils/profile-default-svgrepo.svg"
const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
    return ComponentWithRouterProp;
};



const Question = (props) =>{
    let isDone = false
  
    
    if(props.optionsVotes.includes(props.authedUser))
        isDone = true;


    return(
        <div>
            {isDone ?   
                <div className="question-page-container">
                   

                </div>
                
                :
            
                <div className="question-page-container">
                    <h1 className="question-page-creator">Poll by {props.author}</h1>
                    <img className="question-page-creator-img"></img>
                    
                    <div className="question-page">
                        <h1 >Would You Rather</h1>
                        <div className="question-page-options">
                            <div className="question-page-option">
                                <p>Write your question here to submit it to the react app yikkes!</p>
                                <button>clickme</button>
                            </div>
                            <div className="question-page-option">
                                <p>Write your question here to submit it to the react app yikkes!</p>
                                <button>clickme</button>
                            </div>
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
    
    const author = question[0].author;
    const optionOne =questions[id].optionOne.votes;
    const optionTwo =questions[id].optionTwo.votes;
    const optionsVotes = []
    optionsVotes.concat(optionOne,optionTwo)
    const userAvatar= Object.values(users).filter(user=> user.id===question.author);

    return{
        question,
        author,
        authedUser,
        optionsVotes,
       

    }
}
export default withRouter(connect(mapStateToProps)(Question));