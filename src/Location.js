export default function Location(props){
    return (
        <div className="ta-l pad9 display-flex">
            <img src={props.image} alt="" className="d-inline bra9"/>
            <div className="pad9">
                <p>{props.country}<a></a></p>
                <h2>{props.location}</h2>
                <p><small><b></b></small></p>
                <p></p>
            </div>
        </div>
    )
}