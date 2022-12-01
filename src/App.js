import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import NavBar1 from './components/NavBar1'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer'
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext'
const App = () =>{
  return(
    <CartContextProvider>
        <BrowserRouter>
          <NavBar1/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route path="/details/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;