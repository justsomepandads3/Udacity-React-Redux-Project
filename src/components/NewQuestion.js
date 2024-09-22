import { useState } from "react"
import avatarDefault from "../utils/profile-default-svgrepo.svg"
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
const NewQuestion = (props) =>{
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const changeOptionOne = (value) => {
        setOptionOne(value);
    }
    const changeOptionTwo = (value) => {
        setOptionTwo(value);
    }
    const submitQuestion = () =>{
        props.dispatch(handleAddQuestion(optionOne, optionTwo, props.authedUser))
    }
    return(
        <div>
            <h1 className="question-page-creator">Creating New Question</h1>
            <div className="question-page-container">
                
                <h1 className="question-page-creator">Poll by {props.authedUser}</h1>
                <img className="question-page-creator-img" src={avatarDefault}></img>
                
                <div >
                    <h1 className="question-page">Would You Rather</h1>
                    <div className="question-page-options">
                        <div className="question.add.div">
                            <p >Enter Your First Option</p>
                        <input 
                            id="optionOne" 
                            className="question-page-option-add"
                            value={optionOne}
                            onChange={e=> changeOptionOne(e.target.value)}
                        ></input>
                        </div>
                        <div className="question.add.div">
                            <p>Enter your Second option</p>
                        <input 
                            id="optionTwo" 
                            className="question-page-option-add"
                            value={optionTwo}
                            onChange={e=> changeOptionTwo(e.target.value)}

                        
                        ></input>
                        </div>
                    </div>
                    <button className="question-add-submit" onClick={e => submitQuestion(e)}><h1>Submit</h1></button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps =({authedUser, }) =>{
    return{
        authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion);