import { useEffect, useState } from "react";
import image from "../utils/LoginPageImage.svg"
import { connect, useDispatch, useSelector } from "react-redux";
import { _getUsers } from "../utils/_DATA";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./ProtectedRoute";
const Login = (props) =>{
    //useAuth hook inspired from https://medium.com/@yogeshmulecraft/implementing-protected-routes-in-react-js-b39583be0740
    const {login} = useAuth();
    const users = Object.values(useSelector(state => state.users))
    const authedUser = useSelector(state => state.authedUser) 
    const dispatch = useDispatch()
    const nav=useNavigate(props.page)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    //The error part is inspired from code with yourself https://www.youtube.com/watch?v=S6pp_bpgMJg
    const [errors,setErrors] = useState({});
  

    const loginCred = () =>{
       
        users.forEach(user =>{
            if(user.id===username && user.password===password){
                dispatch(setAuthedUser(user.id))
                login("dummyToken");
                if(props.path==="/"){
                    nav("/dashboard")
                }else{ 
                    nav(props.path)
                }   
            }else{
                setErrors(validate(user.id===username,user.password===password))
            }
            
        })
        setErrors(validate())
    }
    
    //The error part is inspired from code with yourself https://www.youtube.com/watch?v=S6pp_bpgMJg
    const validate = (user=true, pass=true) =>{
       
        const errors = {}
        if(!username)
            errors.username="Enter a username";
        else if(/\S+@\S+\./.test(username))
            errors.username="Enter a valid username";
        else if(user && pass)
            errors.username="User or password is wrong"
        else 
            errors.username = "";
        if(!password)
            errors.password="Enter a password";
        else if(/\S+@\S+\./.test(password))
            errors.password="Enter a valid password";
        else
            errors.password = "";
        return errors
    }

    const updatePassword = (value) =>{
        setPassword(value);
    }

    const updateUsername = (value) =>{
        setUsername(value);
    }
    
    const errorText= (error) =>{
            return <div className="error" id="error-text" data-testid="error-text">{error}</div>
    }

    return(
        <div className="login">
            <img src={image} alt="img"></img>
            <h1>Login</h1>
            <h4>User</h4>
            <form >
                <input 
                    id="username-input"
                    data-testid="username-input"
                    type="text"
                    placeholder="Enter you Username" 
                    value={username}
                    onChange={e => updateUsername(e.target.value)}
                    
                ></input>
                {errors.username && errorText(errors.username)}
                <h4>Password</h4>
                <input 
                    id="password-input"
                    data-testid="password-input"
                    type ="Password" 
                    placeholder="Enter your Password"
                    value={password}
                    onChange={e => updatePassword(e.target.value)} 
                    
                ></input>
                {errors.password && errorText(errors.password)}

                <div className="buttonDiv"> <button id="login-submit-button" data-testid="login-submit-button" className="button" type="button" onClick={loginCred}>Log in</button></div>
                
            </form>
        </div>
    )
}

export default Login;