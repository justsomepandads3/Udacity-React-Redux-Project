import { connect } from "react-redux";
import { useEffect, useState } from "react"
import  {handleInitialData}  from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Route, Routes, useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";
import Question from "./Question";
import Nav from "./Navigate";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import Leaderboard from "./Leaderboard";
function App(props) {
  const nav = useNavigate("/")
  const location = useLocation();
  const [page, setPage] = useState('')
  useEffect(() =>{
    props.dispatch(handleInitialData());
    // if(location.pathname=="/question/?id")
    //     nav("/dashbard")

    if(!props.authedUser){
      setPage(`${location.pathname}`);
      nav("/");

    
    }else if(props.authedUser){
      nav(page);
      console.log(page)
    }

  },[])



  return (
    <div>
      {props.authedUser && <Nav></Nav>}
      
      <Routes>
        <Route path="/" exact          element={<Login path={page}/>}/>         
        <Route path="/question/:id"    element={<Question></Question>}/>       
        <Route path="/dashboard"       element={ <Dashboard/>}/>                
        <Route path="/add"             element={<NewQuestion></NewQuestion>}/>  
        <Route path="/leaderboard"     element={<Leaderboard></Leaderboard>}/>  
        <Route path="*"               element={<PageNotFound/>}/>               

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
