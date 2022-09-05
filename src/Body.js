import data from "./data"
import Location from "./Location"
export default function Body() {
    let card = data.map(el=><Location 
        key={el.id}
        {...el}
        />
        )
    return (
        <div className="margin15 width100pc">
            {card}
        </div>
    )
}