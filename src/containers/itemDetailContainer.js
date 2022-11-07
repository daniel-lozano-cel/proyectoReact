import Detail from '../components/ItemDetail'
import {useEffect, useState} from 'react'
import {List} from '../components/ItemList'
import {customFetch} from '../utils/customFetch'
import Counter from '../components/ItemCount'

const ItemDetailContainer = (props) =>{
    const[data, setData] = useState({})
    
    setTimeout(
        useEffect(()=>{
            fetch(List)
                .then(response => response.json())
                .then(response => setData(response.results))
                .catch(error => console.log(error))
        }, [])
    , 2000)
    
    /*
    setTimeout(
        useEffect(()=>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=microfonos')
                .then(response => response.json())
                .then(response => setData(response.results))
                .catch(error => console.log(error))
        }, [])
    , 2000)
    */
    

    return(
        
            <>
                <div>
                    <img src={props.pictureUrl} alt="" />
                </div>
                    <div>
                        <h2>{props.title}</h2>
                        <h4>{props.price}</h4>
                        <h3>{props.description}</h3>
                        <p>Stock disponible: {props.available_quantity}</p>
                        <Counter></Counter>
                    </div>
                
            </>
            
    )
}

export default ItemDetailContainer;