import { HiOutlineShoppingCart } from 'react-icons/hi';
import '../App.css'
const NavBar = () => {
    return(

        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Categoría 1</a>
                        <a class="nav-link" href="#">Categoría 2</a>
                        <a class="nav-link" href="#">Categoría 3</a>
                    </div>
                    <a class="nav-link" href="#">Registro</a>
                    <HiOutlineShoppingCart/>
                </div>
            </div>
        </nav>

    )
}
export default NavBar;

