import { BrowserRouter} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer'
const App = () =>{
  return(
    <BrowserRouter>
      <NavBar/>
      <ItemDetailContainer/>
    </BrowserRouter>
      
  )
}

export default App;