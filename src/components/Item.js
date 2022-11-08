import {Link} from 'react-router-dom'
const Products = (props) => {

    return (
        <>
            <div className="container">
                <div>
                    <img src={props.pictureUrl} alt="Same alt value" className="images"/>
                </div>
                <div className="">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <p>Precio (ARG): {props.price}</p>
                    <p>Stock disponible: {props.available_quantity}</p>
                </div>
                <Link to='/details'><a className='detailButton' href="">View Details</a></Link>                
            </div>
        </>
          
    )
}

export default Products;