import { Link } from "react-router-dom";
import  {formatDate}  from "../utils/helpers"

const QuesitonCard = (props) =>{

    return(
        <Link to={`/question/:${props.id}` }>
            
            <h1 className="question-user">{props.author}</h1>
            <p className="question-timestamp"> {formatDate(props.timestamp)}</p>
            
            

        </Link>
       
    )
}

export default QuesitonCard;