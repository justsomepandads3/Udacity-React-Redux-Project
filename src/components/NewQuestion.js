import { useState } from "react"
import avatarDefault from "../utils/profile-default-svgrepo.svg"
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
const NewQuestion = (props) =>{
    const nav = useNavigate('/add')

    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [errorOne,setErrorOne] = useState(false);
    const [errorTwo, setErrorTwo] = useState(false);
    const changeOptionOne = (value) => {
        setOptionOne(value);
    }
    const changeOptionTwo = (value) => {
        setOptionTwo(value);
    }
    const submitQuestion = () =>{
        if(optionOne!="" && optionTwo!=""){
        props.dispatch(handleAddQuestion(optionOne, optionTwo, props.authedUser))
        nav('/dashboard')
        }else{
            if(optionOne==="")
                setErrorOne(true);
            if(optionTwo==="")
                setErrorTwo(true);
        }
    }
    return(
        <div>
            <h1 className="question-page-creator">Creating New Question</h1>
            <div className="question-page-container-new">
                
                <h2 className="question-page-creator"><b>Poll by {props.authedUser}</b></h2>
                <img className="question-page-creator-img" src={props.user.avatar ? props.user.avatar : avatarDefault}></img>
                
                <div >
                    <h3 className="question-page"><b>Would You Rather</b></h3>
                    <div className="question-page-options">
                        <div className="question.add.div">
                            <p >Enter Your First Option</p>
                        <input 
                            id="optionOne" 
                            className="question-page-option-add"
                            value={optionOne}
                            onChange={e=> changeOptionOne(e.target.value)}
                        ></input>
                        {errorOne && <p className="error">Please write an option</p>}
                        </div>
                        <div className="question.add.div">
                            <p>Enter your Second option</p>
                        <input 
                            id="optionTwo" 
                            className="question-page-option-add"
                            value={optionTwo}
                            onChange={e=> changeOptionTwo(e.target.value)}

                        
                        ></input>
                        {errorTwo && <p className="error">Please write an option</p>}
                        </div>
                    </div>
                    
                </div>
                <button className="question-add-submit" onClick={e => submitQuestion(e)}><h3>Submit</h3></button>
            </div>
        </div>
    )
}
const mapStateToProps =({authedUser, users}) =>{
    const user = users[authedUser]
    return{
        authedUser,
        user,
    }
}
export default connect(mapStateToProps)(NewQuestion);