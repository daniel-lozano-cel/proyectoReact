import { BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer'
import About from './components/About'
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemDetailContainer/>} /> 
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}
/**<Route path='/detail'><ItemDetailContainer/></Route>
        <Route path='/about'><h1>Soy About</h1></Route> */
export default App;