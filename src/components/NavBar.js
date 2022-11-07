import {Link} from 'react-router-dom'

import '../App.css'
import CartWidget from './CartWidget.js';
const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link to='/'  ><a className="navbar-brand" href="#">Shop</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/category/1'><a className="nav-link" href="#">Zapatos Casuales</a></Link>
                        <Link to='/category/2'><a className="nav-link" href="#">Tennis</a></Link>
                        <Link to='/category/3'><a className="nav-link" href="#">Elegantes</a></Link>
                    </div>
                    <a className="nav-link" href="#">Registro</a>
                    <CartWidget/>
                </div>
            </div>
        </nav>

    )
}
export default NavBar;

