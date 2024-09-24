import { Link } from "react-router-dom"
import { connect, useSelector } from "react-redux"
import { setAuthedUserToNull } from "../actions/authedUser"
import avatarDefault from "../utils/profile-default-svgrepo.svg"
import { useAuth } from "./ProtectedRoute"
const Nav = (props) =>{
    const users = useSelector(state => state.users);
    const authedUser = useSelector(state => state.authedUser)
    const avatar = users[authedUser].avatar
    
    return(
        <div>
            <div className="navigationBar">
                <Link className="nav" to={!authedUser ? "/" : "dashboard"}>Home</Link>
                
                <Link className="nav" to={!authedUser ? "/" :"/leaderboard"}>Leaderboard</Link> 
                   
                 
                <Link className="nav" to={!authedUser ? "/" :"/add"}>New Question</Link>
                

                  <div className="user-info">
                    <h4>{authedUser}</h4>
                    <Link className="nav" to={"/"} onClick={setAuthedUserToNull()}>Logout</Link>
                  </div>
                  <img className="user-info-img" src={avatar ? avatar:avatarDefault} alt="user profile picture"></img>
            </div>
            
        </div>
    )
}

export default Nav;