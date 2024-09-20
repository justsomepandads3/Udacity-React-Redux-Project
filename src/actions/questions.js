export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

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
