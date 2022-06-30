import { Link } from 'react-router-dom';

const Createaccountstep3 = () => {
    return (
        <div className="CreateAccount">

            <div className="content" style={{ textAlign: 'center' }}>
                <h2>Étape 3</h2>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Courriel Électronique</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="Email" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationLeft">
                <div className="seperationLeft">
                    <h3>Confrimer Courriel Électronique</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="EmailConfirm" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationRight">
                <button>
                    <Link to="/creeruncompteetape=2">Précédent</Link>
                </button>
                <button>
                    <Link to="/accountcree">Continuer</Link>
                </button>
            </div>

        </div>





    );
}

export default Createaccountstep3;