import Counter from './ItemCount'
const Detail = (props) =>{
    return(
        <>  {
                <>
                <div>
                    <img src={props.pictureUrl} alt="" className="images"/>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h4>{props.price}</h4>
                    <h3>{props.description}</h3>
                    <p>Stock disponible: {props.available_quantity}</p>
                </div>
                </>
            }
            <Counter/>

        </>
    )

}
export default Detail;