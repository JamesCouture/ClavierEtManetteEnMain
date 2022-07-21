import { getValue } from '@testing-library/user-event/dist/utils';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import JSONDATA from './Game_Data.json'
import { useState } from 'react'

const Searchpage = () => {
    const { t } = useTranslation();

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="content" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <input type="text" placeholder={t('SearchSerche')} onChange={event => { setSearchTerm(event.target.value) }} style={{ marginTop: "20px", width: "300px", height: "40px", fontSize: "25px", paddingLeft: "10px" }} />
            {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.game_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return <div className="searchOptions" key={key}>
                    <p style={{ margin: "10px", fontSize: "25px" }}>
                        <Link to={val.path}>{val.game_name}</Link>
                    </p>
                </div>
            })}
        </div>
    );
}

export default Searchpage;