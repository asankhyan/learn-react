import "./card-style.css"

export const Card  = (props)=>{
    return (
        <div className="card">
            <img alt="" src={props.item.img}/>
            <h4 key={props.item.name}>
                {props.item.name}
            </h4>
            <span>{props.item.email}</span>
        </div>
    );
}