import { Link } from 'react-router-dom';

const Createaccountstep2 = () => {
    return (
        <div className="CreateAccount">

            <div className="content" style={{ textAlign: 'center', paddingTop: "50px" }}>
                <h1>Bienvenue à la page pour créer un compte</h1>
            </div>

            <div className="content" style={{ textAlign: 'center' }}>
                <h2>Étape 2</h2>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Mot de Passe</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="Password" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Confirmer Mot de Passe</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="PassowrdComfirm" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationRight">
                <button>
                    <Link to="/creeruncompteetape=1">Précédent</Link>
                </button>
                <button>
                    <Link to="/creeruncompteetape=3">Continuer</Link>
                </button>
            </div>

        </div>





    );
}

export default Createaccountstep2;