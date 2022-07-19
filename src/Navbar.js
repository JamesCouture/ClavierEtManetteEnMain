import { Link } from 'react-router-dom';
import SearchBar from './Search';
import i18next from 'i18next'
import {useTranslation} from 'react-i18next'

const Navbar = () => {

    const {t} = useTranslation();

    return (
        <nav className="navbar">
            <h1>CMM<br></br>Clavier et Manette en Mains</h1>

            <div className="links">

                <SearchBar/>
                <Link to="/">{t('NavHome')}</Link>
                <Link to="/forum">{t('NavForum')}</Link>
                <Link to="/creeruncompteetape=1">{t('NavAccountCreation')}</Link>
                <Link to="/connection">{t('NavConnection')}</Link>
                <Link to="/FAQ">{t('NavFAQ')}</Link>
                <button onClick={() => i18next.changeLanguage('fr')}>Français</button>
                <button onClick={() => i18next.changeLanguage('de')}>Deutsch</button>
            </div>
        </nav>
    );
}

export default Navbar;