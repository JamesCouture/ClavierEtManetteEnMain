import imgSilksong from './images/Silksong.jpg';
import imgDoom from './images/Doomhelleternal.png';
import imgCuphead from './images/Cuphead.png';
import imgF1 from './images/f1.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="Home">

            <div className="content" style={{ textAlign: 'center', display:'flex' }}>
                <h2>Bienvenue</h2>
            </div>


            <div className="content">
                <h3>Nouveautées</h3>
            </div>

            <div className="content">
                <div className="rowC">
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgSilksong} alt="SilkSong" />
                        </div>
                        <Link to="/silksong">Silksong sort bientôt avant le 23 juin 2023</Link>
                    </div>
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgDoom} alt="Doomhell Eternal" />
                        </div>
                        <h4>Nouveau record dans Doom Eternal ultra-nightmare niveau master</h4>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="rowC">
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgCuphead} alt="Cuphead" />
                        </div>
                        <h4>Le nouveau DLC de Cuphead sortie juin le 30</h4>
                    </div>
                    <div className="colR">
                        <div className="imageCenter">
                            <img src={imgF1} alt="F1 2022" />
                        </div>
                        <h4>Le nouveau jeu de formule 1 sortie juin le 28</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;