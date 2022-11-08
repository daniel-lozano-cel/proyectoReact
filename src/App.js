import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer'
import About from './components/About'
const App = () =>{
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} /> 
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/details" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;