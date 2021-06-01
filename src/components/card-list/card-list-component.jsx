import { Card } from "../card/card-component";
import "./card-list.styles.css"

let CardList = (props)=>{
    return(
        <div className="cards-list">
            {
                props.listItems.map(ele=>{
                    return <Card key={ele.id} item={ele}/>
                })
            }
        </div>
    )
};

export default CardList