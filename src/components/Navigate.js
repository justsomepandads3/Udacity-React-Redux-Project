import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setAuthedUserToNull } from "../actions/authedUser"
import avatarDefault from "../utils/profile-default-svgrepo.svg"
const Nav = (props) =>{
    return(
        <div>
            <div className="navigationBar">
                <Link className="nav" to={!props.authedUser ? "/" : "dashboard"}>Home</Link>
                
                <Link className="nav" to={!props.authedUser ? "/" :"/leaderboard"}>Leaderboard</Link> 
                   
                 
                <Link className="nav" to={!props.authedUser ? "/" :"/add"}>New Question</Link>
                

                  <div className="user-info">
                    <h4>{props.authedUser}</h4>
                    <Link className="nav" to={"/"} onClick={setAuthedUserToNull()}>Logout</Link>
                  </div>
                  <img className="user-info-img" src={avatarDefault}></img>
            </div>
            
        </div>
    )
}
const mapStateToProps = ({authedUser})=>{
    return{
        authedUser,
    }
}
export default connect(mapStateToProps)(Nav);