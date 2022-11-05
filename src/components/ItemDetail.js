
const Detail = (props) =>{
    return(
        <>  {
                <>
                <div>
                    <img src={props.pictureUrl} alt="" />
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <h4>{props.price}</h4>
                    <h3>{props.description}</h3>
                    <p>Stock disponible: {props.available_quantity}</p>
                </div>
                </>
            }
        </>
    )

}
export default Detail;