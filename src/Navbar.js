import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Clavier et Manette en Mains</h1>
            <div className="links">
                <Link to="/">Acceuil</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/creeruncompteetape=1">Créer un compte</Link>
                <Link to="/connection">Connection</Link>
            </div>
        </nav>
    );
}

export default Navbar;