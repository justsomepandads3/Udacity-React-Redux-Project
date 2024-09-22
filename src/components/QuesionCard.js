import { Link } from "react-router-dom";
import  {formatDate}  from "../utils/helpers"

const QuesitonCard = (props) =>{

    return(
        <div>
            
            <h1 className="question-user">{props.author}</h1>
            <p className="question-timestamp"> {formatDate(props.timestamp)}</p>
            
            

        </div>
       
    )
}

export default QuesitonCard;