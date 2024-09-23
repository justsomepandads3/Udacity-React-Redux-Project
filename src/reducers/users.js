import { RECEIVE_USERS, SAVE_QUESTION_ID } from "../actions/users";

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users,
            };
        case SAVE_QUESTION_ID:
            const uid = `${action.uid}`
            console.log(state[uid].questions)
            return{
                ...state,
                [uid]: {
                    ...state[uid],
                    questions: state[uid].questions.concat(action.qid)
                        
                    
                } 
            }
        default:
            return state;
    }
}