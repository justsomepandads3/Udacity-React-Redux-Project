import quesitons from "../reducers/questions"
import { 
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
    
 } from "./_DATA"

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
}

export function saveQuestion(quesiton){
  return _saveQuestion(quesiton)
}

