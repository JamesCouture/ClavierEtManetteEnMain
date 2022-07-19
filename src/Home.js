import imgSilksong from './images/Silksong.jpg';
import imgDoom from './images/Doomhelleternal.png';
import imgCuphead from './images/Cuphead.png';
import imgF1 from './images/f1.jpg';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next'


const Home = () => {

    const {t} = useTranslation();

    return (
        <div className="Home" style={{ background: "white" }}>

            <div className="content" style={{ textAlign: 'center', padding: "50px" }}>
                <h1>{t('HomeBienvenue')}</h1>
                <div style={{ paddingTop: "40px" }}>
                    <p>{t('HomeBienenueMessage')}</p>
                </div>

            </div>


            <div className="content" style={{ padding: '0px' }}>
                <h1>{t('Nouveaute')}</h1>
            </div>

            <div className="content">
                <div className="rowC">
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgSilksong} alt="SilkSong" />
                        </div>
                        <Link to="/silksong" style={{ color: "#5896C7" }}>{t('HomeSilksong')}</Link>
                    </div>
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgDoom} alt="Doomhell Eternal" />
                        </div>
                        <h4>{t('HomeDoom')}</h4>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="rowC">
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgCuphead} alt="Cuphead" />
                        </div>
                        <h4>{t('HomeCuphead')}</h4>
                    </div>
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgF1} alt="F1 2022" />
                        </div>
                        <h4>{t('HomeF1')}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;