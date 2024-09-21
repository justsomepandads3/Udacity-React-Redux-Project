import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

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
    
    console.log(props.author)
    if(props.optionOne.includes(props.authedUser) || props.optionTwo.includes(props.authedUser))
        isDone = true;


    return(
        <div>
            {isDone ?   
                <div className="question-container">
                   

                </div>
                
                :
            
                <div className="question-container">
                    <h1 className="question-creator">Poll by {props.author}</h1>
                    <img className="question-creator-img"></img>
                    
                    <div className="question">
                        <h1 >Would You Rather</h1>
                        <div className="question-options">
                            <div className="question-option">
                                <p>jj{}</p>
                                <button>clickme</button>
                            </div>
                            <div className="question-option">
                                <p>ss{}</p>
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
    const author = question.author;
    const optionOne =questions[id].optionOne.votes;
    const optionTwo =questions[id].optionTwo.votes;

    return{
        question,
        author,
        authedUser,
        optionOne,
        optionTwo,

    }
}
export default withRouter(connect(mapStateToProps)(Question));