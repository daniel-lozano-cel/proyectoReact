import Products from '../components/Item.js'
import {useEffect, useState} from 'react'
import {List} from '../components/ItemList'
import {useParams} from 'react-router-dom'
import customFetch from '../utils/customFetch'

const ItemListContainer = () =>{
    const[data, setData] = useState([])
    const {categoryId} = useParams()
    //Usando array de productos propio 
    useEffect(() => {
        customFetch(2000, List.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [categoryId]);
   
   /*
    Consulta a la API

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
                data.map(item => (
                    <Products
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

export default ItemListContainer