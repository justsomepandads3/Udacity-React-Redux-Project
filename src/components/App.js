import { connect } from "react-redux";
import { useEffect } from "react"
import  {handleInitialData}  from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Question from "./Question";
function App(props) {
  const nav = useNavigate("/")
  useEffect(() =>{
    props.dispatch(handleInitialData());
    if(!props.authedUser)
      nav("/")
  },[])

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login/>}></Route>
        <Route path="/question/:id" element={<Question></Question>}></Route>
        <Route path="/dashboard" element={ <Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export function mapStateToProps ({users, questions,authedUser}){
  return({
    users,
    questions,
    authedUser,
  })
}
export default connect(mapStateToProps)(App);
