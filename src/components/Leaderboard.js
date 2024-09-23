import { connect } from "react-redux"
import avatarDefault from "../utils/profile-default-svgrepo.svg"
const Leaderboard = (props) =>{
    
    const questions = Object.values(props.questions)

    const countNumOfCreated = (questions,user) =>{
        let count = 0
        questions.forEach(question => {
            if(question.author===user)
                count++;
            
        });

        return count;
    }
    /*  
    Here I used Gemini to produce the algorithm of the calculation of the order of users in 
    descending based on the sum of the number of questions they’ve answered and the number 
    of questions they’ve asked.
    */

    /* The original output :
    function orderUsersByActivity(users) {
        return users.sort((a, b) => {
            const aTotal = a.answeredQuestions + a.askedQuestions;
            const bTotal = b.answeredQuestions + b.askedQuestions;
            return bTotal - aTotal;
        });
    }
   
    */ 

    const users = Object.values(props.users).sort(
        
        (a,b) => {

        const aTotal = Object.values(a.answers).length + a.questions.length
        const bTotal = Object.values(b.answers).length + b.questions.length

        return bTotal-aTotal
    })
    //===================================================================================================================================
    return(
        <div className="leaderboard-container">
            <table className="leaderboard-table">
                <tbody>
                <tr>
                    <th className="leaderboard-table-t">Users</th>
                    <th className="leaderboard-table-t">Answered</th>
                    <th className="leaderboard-table-t">Created</th>
                </tr>
                {
                    users.map((user)=>{
                        return(
                            <tr key={user.id}>
                                <td className="leaderboard-data">
                                    <div className="leaderboard-data-users">
                                    <img src={user.avatar ? user.avatar : avatarDefault} className="leaderboard-info-img"></img>
                                    <div>
                                        <p className="leaderboard-table-h2"><b>{user.name}</b></p>
                                        <p className="leaderboard-table-p">{user.id}</p>
                                    </div>
                                    </div>
                                </td>
                                <td className="leaderboard-data">
                                    <h3>{Object.values(user.answers).length}</h3>
                                
                                </td> 

                                <td className="leaderboard-data">
                                    <h3>{countNumOfCreated(questions,user.id)}</h3>
                                
                                </td>                               
                            </tr>
                        )
                    })}
                    
                    </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = ({users,questions}) =>{
     
    return{
        users,
        questions,
    }
}
export default connect(mapStateToProps)(Leaderboard);