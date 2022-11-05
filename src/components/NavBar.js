import '../App.css'
import CartWidget from './CartWidget.js';
const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Categoría 1</a>
                        <a className="nav-link" href="#">Categoría 2</a>
                        <a className="nav-link" href="#">Categoría 3</a>
                    </div>
                    <a className="nav-link" href="#">Registro</a>
                    <CartWidget/>
                </div>
            </div>
        </nav>

    )
}
export default NavBar;

