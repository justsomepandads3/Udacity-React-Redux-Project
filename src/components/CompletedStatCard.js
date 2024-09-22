const CompletedStatCard=(props) => {
    return(
        <div className="stat-container">
            <div className="stat-p">
                <h2>{props.title}</h2>
                <h1>{props.stat}</h1>
                <img ></img>
            </div>
        </div>
    )
}
export default CompletedStatCard;