export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_QUESTION_ID = "SAVE_QUESTION_ID";

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}
export function saveQuestionId(qid,uid){
    return{
        type: SAVE_QUESTION_ID,
        qid,
        uid,
    }
}

// export function handleSaveQuestionAnswer(){
//     return (dispatch) =>{

//     }
// }


