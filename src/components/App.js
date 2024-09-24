import { connect, useDispatch, useSelector } from "react-redux";
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
import AuthProvider, { useAuth } from "./ProtectedRoute";
import PrivateRoutes from "./PrivateRoutes";
function App(props) {
  const {login, isAuthenticated} = useAuth();
  const users = useSelector(state => state.users);
  const questions = useSelector(state => state.questions);
  const authedUser = useSelector(state => state.authedUser);
  const dispatch = useDispatch();
  const nav = useNavigate("/")
  const location = useLocation();
  const [page, setPage] = useState('')

  useEffect(() =>{
    dispatch(handleInitialData());
    if(!authedUser){
      setPage(`${location.pathname}`);
      nav("/");
    }else if(authedUser){ 
      nav(page);
    }

  },[])



  return (
    <div>
      {authedUser && <Nav></Nav>}

        
          <Routes>
            <Route path="/" exact          element={<Login path={page}/>}/> 

            <Route element={<PrivateRoutes></PrivateRoutes>}>
              <Route path="/question/:id"    element={<Question></Question>}/> 
              <Route path="/add"             element={<NewQuestion></NewQuestion>}/>     
            </Route>   
                         
            <Route path="/dashboard"       element={ <Dashboard/>}/>                
            <Route path="/leaderboard"     element={<Leaderboard></Leaderboard>}/>
            {/* The 404 page was inspired by Anthony Luzquiños from stackoverflow https://stackoverflow.com/a/69878940*/} 
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
    </div>
  );
}


export default App;
