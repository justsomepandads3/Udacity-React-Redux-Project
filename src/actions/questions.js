import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { handleInitialData } from "./shared";
import { saveQuestionId } from "./users";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions,
    
    }
}
export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,

    }
}


export function saveQuestionAnswer( {answer,qid,authedUser}){
    return{
        type: SAVE_QUESTION_ANSWER,
        answer,
        qid,
        authedUser,
    }
}

export function handleSaveQuestionAnswer(info){
    return (dispatch)=>{
        return (
            _saveQuestionAnswer(info).then(dispatch(handleInitialData()))
        
        )
    }
}
export function handleAddQuestion(optionOne, optionTwo, author) {
    return (dispatch) => {
        return _saveQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: author})
        .then(question =>{
            dispatch(addQuestion(question));
            dispatch(saveQuestionId(question.id,author))
        })
       
      
    }
  }