
import Counter from './ItemCount'
/*
const Detail = ({item}) =>{
    return(
        <>  
        
            {
                
                <>
                <div>
                    <img src={item.pictureUrl} alt="" className="images"/>
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <h4>{item.price}</h4>
                    <h3>{item.description}</h3>
                    <p>Stock disponible: {item.available_quantity}</p>
                </div>
                </>
            }
            <Counter/>

        </>
    )

}
export default Detail;
*/

const ItemDetail = ({item}) => {


    return (
        <>
            
                <div>
                    <div>
                        <img className="images" src={item.pictureUrl} alt=""></img>
                    </div>
                    <div>
                        <h1 className="white"  >  {item.name}</h1>
                        <h3 className="white"  >{item.description}</h3>
                        <span  className="white" >$ {item.cost}</span>
                        <p className="white" > {item.available_quantity}</p>
                    </div>
                </div>
                <Counter/>
        </>
    );
}

export default ItemDetail;