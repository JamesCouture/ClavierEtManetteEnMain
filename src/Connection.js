import { Link } from 'react-router-dom';

const Connection = () => {
    return (
        <div className="Connection">

            <div className="content" style={{ textAlign: 'center' }}>
                <h2>Connection</h2>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Nom de l'Usager</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="name" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Mot de Passe</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="password" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationRight">
                <button>
                    <Link to="/">Continuer</Link>
                </button>
            </div>

        </div>
    );
}

export default Connection;