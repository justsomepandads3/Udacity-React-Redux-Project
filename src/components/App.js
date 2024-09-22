import { connect } from "react-redux";
import { useEffect } from "react"
import  {handleInitialData}  from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Route, Routes, useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";
import Question from "./Question";
import Nav from "./Navigate";
import NewQuestion from "./NewQuestion";
function App(props) {
  const nav = useNavigate("/")
  const location = useLocation();
  useEffect(() =>{
    props.dispatch(handleInitialData());
    if(location.pathname=="/question/?id")
        nav("/dashbard")
    // if(!props.authedUser)
    //   nav("/");
  },[])



  return (
    <div>
      {props.authedUser && <Nav></Nav>}
      
      <Routes basename={"/"}>
        <Route path="/" exact element={<Login/>}></Route>
        <Route path="/question/:id" element={<Question></Question>}></Route>
        <Route path="/dashboard" element={ <Dashboard/>}></Route>
        <Route path="/add" element={<NewQuestion></NewQuestion>}></Route>
      </Routes>
    </div>
  );
}

function mapStateToProps ({users, questions,authedUser}){
  return({
    users,
    questions,
    authedUser,
  })
}
export default connect(mapStateToProps)(App);
