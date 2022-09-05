export default function Location(props){
    return (
        <div className="ta-l pad9 display-flex lh10">
            <div className="d-inline bra9 height100px bg-red" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="pad9">
                <p className="pt12">{props.country}  <a href={props.googleMaps}><small>View on Google Maps</small></a></p>
                <h2>{props.location}</h2>
                <p className="pt12"><small><b>{props.date}</b></small></p>
                <p className="fs12 pt12">{props.content}</p>
            </div>
        </div>
    )
}