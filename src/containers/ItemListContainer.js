import Products from '../components/Item.js'
import {useEffect, useState, useParams} from 'react'
import {List} from '../components/ItemList'

const ItemListContainer = () =>{
    const[data, setData] = useState([])
    const {categoryId} = useParams()

    //Usando array de productos propio 
    useEffect(()=>{
        if(categoryId === 'undefined'){
            fetch(2000,'https://api.mercadolibre.com/sites/MLA/search?q=microfonos')
            .then(response => setData(response))
            .catch(error => console.log(error))
        } else {
            fetch(2000,'https://api.mercadolibre.com/sites/MLA/search?q=microfonos')
            .then(response => response.json())
            .then(response => setData(response))
            .then(List.filter(item=> item.categoryId == categoryId))
            .catch(error => console.log(error))
        }
        
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
                List.map(item => (
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