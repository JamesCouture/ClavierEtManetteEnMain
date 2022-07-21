import { Link } from 'react-router-dom';
import Search from './Searchpage';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { AccountContext } from './Helper/Context';
import { useContext } from 'react'

const Navbar = () => {

    const { t } = useTranslation();

    const { accountUserName, setAccountUserName } = useContext(AccountContext)

    return (
        <nav className="navbar">
            <h1>CMM<br></br>Clavier et Manette en Mains</h1>

            <div className="links">
                <p style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0 rem', paddingLeft: '0px', marginBlockEnd: '0em', paddingRight: '0px'}}>{accountUserName}</p>
                <div style={{ paddingLeft: '10px', justifyContent: "right", display: "flex",}}>
                    <div>
                    <Link to="/search" type="submit" style={{ fontSize: '20px', height: '25px',display: 'flex',justifyContent: 'center',alignItems: 'center',borderStyle: 'solid',borderWidth: '1px',borderColor: '#447780',borderRadius: '5px',backgroundColor: '#ebfcff',height:'35px'}}>{t('SearchSerche')}</Link>
                    </div>
                </div>
                {/* <Search /> */}
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