import { GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER, SAVE_QUESTION } from "../actions/questions";

export default function quesitons(state={}, action){
    switch(action.type){
        case GET_QUESTIONS:
            return{
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question,
            }
        case SAVE_QUESTION_ANSWER:
            const authedUser = `${action.authedUser}`;
            return{
                    ...state,
                    [action.qid]: {
                        ...state[action.qid],
                        optionOne:
                            {
                                ...state[action.qid].optionOne,
                                votes: 
                                    action.answer==="optionOne" ? state[action.qid].optionOne.votes.concat(authedUser): state[action.qid].optionOne.votes 
                            },
                        optionTwo:
                            {
                                ...state[action.qid].optionTwo,
                                votes: 
                                action.answer==="optionTwo" ? state[action.qid].optionTwo.votes.concat(authedUser) : state[action.qid].optionTwo.votes
                            },
                                
                        
                    }
                }
        case SAVE_QUESTION:
           
        return{
                ...state,
                [action.question.id]: action.question

            }
        default:
            return state
    }

}