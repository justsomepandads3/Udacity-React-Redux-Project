const CompletedStatCard=(props) => {
    return(
        <div>
            <div className="stat-p">
                <h3>{props.title}</h3>
                <h1>{props.stat}</h1>
                <img ></img>
            </div>
        </div>
    )
}
export default CompletedStatCard;