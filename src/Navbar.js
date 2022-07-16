import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CMM<br></br>Clavier et Manette en Mains</h1>

            <div className="links">

                <SearchBar/>
                <Link to="/">Acceuil</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/creeruncompteetape=1">Créer un compte</Link>
                <Link to="/connection">Se connecter</Link>
                <Link to="/FAQ">FAQ</Link>
            </div>
        </nav>
    );
}

export default Navbar;