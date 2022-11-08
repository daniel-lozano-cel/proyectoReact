import {useEffect, useState} from 'react'
import {List} from '../components/ItemList'
import Detail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { customFetch } from '../utils/customFetch'
const ItemDetailContainer = () =>{
    const[data, setData] = useState({})
    const {id} = useParams()
        setTimeout(
            useEffect(()=>{
                customFetch(2000, List.find(item => item.id == id))
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
             {
               List.map(item => (
                    <Detail
                        key={item.id}
                        pictureUrl={item.pictureUrl}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        available_quantity={item.available_quantity}
                    />
                ))
            }
        </>
    )
    
}

export default ItemDetailContainer;