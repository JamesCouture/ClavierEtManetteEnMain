
import {useTranslation} from 'react-i18next'


const SearchBar = () => {

    const {t} = useTranslation();

    return(
    <form action="/" method="get">
        <label htmlFor="header-search" style={{ paddingRight: '10px', justifyContent: "right", display: "flex" }}>
            <span className="visually-hidden">fsd</span>
        </label>
        <div style={{ paddingLeft: '10px', justifyContent:"right",display:"flex" }}>
            <input
                type="text"
                id="header-search"
                placeholder={t('placeHolderSearch')}
                name="s"
            />

            <button type="submit" style={{ fontSize: '20px', height: '27px' }}>{t('SearchSerche')}</button>
        </div>

    </form>
);
}

export default SearchBar;