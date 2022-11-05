import Detail from '../components/ItemDetail'
import {useEffect, useState} from 'react'
import {List} from '../components/ItemList'
import {customFetch} from '../utils/customFetch'

const ItemDetailContainer = (props) =>{
    const[data, setData] = useState([])
    
    useEffect(()=>{
        customFetch(List)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(error => console.log(error))
    }, [])
    
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
    const [unit, setUnit] = useState(0);
        
    const increaseUnit = () =>{
        setUnit(unit+1);
        if (unit >= props.available_quantity){
            setUnit(unit+0)
        }
    }
    const decreaseUnit = () =>{
        setUnit(unit-1)
        if(unit <= 0){
            setUnit(unit+0)
        }
    }
    const cleanUnit = () => {
        setUnit(unit - unit);
    }

    return(
        <>

            {
                data.map(item => (
                    <Detail
                        key={item.id}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        price={item.price}
                        available_quantity={item.available_quantity}
                    />
                ))
            }
            <button onClick={increaseUnit}>+</button>
            <span>Añadir al carrito: {unit} </span>
            <button onClick={decreaseUnit} >-</button>
            <button onClick={cleanUnit}>Vaciar</button>

        </>
    )
}

export default ItemDetailContainer;