// import { _saveQuestionAnswer } from "../utils/_DATA";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
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
export function saveQuestion(question){
    return{
        type: SAVE_QUESTION,
        question
    }
}

export function saveQuestionAnswer({answer,qid,authedUser}){
    return{
        type: SAVE_QUESTION_ANSWER,
        answer,
        qid,
        authedUser,
    }
}

export function handleSaveQuestionAnswer(info){
    return (dispatch)=>{
        dispatch(saveQuestionAnswer(info))
    }
}
export function handleAddQuestion(optionOne, optionTwo, author) {
    return (dispatch) => {
        dispatch(saveQuestion({optionOne, optionTwo, author}))
    }
  }