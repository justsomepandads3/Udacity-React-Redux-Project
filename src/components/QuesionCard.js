import  {formatDate}  from "../utils/helpers"

const QuesitonCard = (props) =>{

    return(
        <div className="">
            
            <h1 className="question-user">{props.author}</h1>
            <p className="question-timestamp"> {formatDate(props.timestamp)}</p>
            
            

        </div>
       
    )
}

export default QuesitonCard;