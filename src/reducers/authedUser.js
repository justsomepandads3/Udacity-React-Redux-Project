import { GET_AUTHEDUSER, SET_AUTHEDUSER } from "../actions/authedUser";

export default function authedUser (state = null, action) {
    switch(action.type){

        case SET_AUTHEDUSER:
            return action.id
        
        case GET_AUTHEDUSER:
            return{
                ...state,
                [action.authedUser.id]: action.authedUser,
            }
        default:
            return state
            
    };

};
