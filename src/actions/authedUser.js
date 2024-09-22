
export const GET_AUTHEDUSER = "GET_AUTHEDUSER";
export const SET_AUTHEDUSER = "SET_AUTHEDUSER";

export function receiveAuthedUser(authedUser){
    return{
        type: GET_AUTHEDUSER,
        authedUser,
    }
}
export function setAuthedUser(id){
    return{
        type: SET_AUTHEDUSER,
        id,
    }
}

export function setAuthedUserToNull(){
    return(dispatch) =>{
        dispatch(setAuthedUser(null))
    }
}