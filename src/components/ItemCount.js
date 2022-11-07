import { useState} from 'react'
import {List} from '../components/ItemList'


const Counter = (props) =>{
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
            <button onClick={increaseUnit}>+</button>
            <span>Añadir al carrito: {unit} </span>
            <button onClick={decreaseUnit} >-</button>
            <button onClick={cleanUnit}>Vaciar</button>
        </>
        
    )

}
export default Counter;