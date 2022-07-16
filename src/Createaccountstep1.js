import { Link } from 'react-router-dom';

const Createaccountstep1 = () => {
    return (
        <div className="CreateAccount">

            <div className="content" style={{ textAlign: 'center', paddingTop: "50px" }}>
                <h1>Bienvenue à la page pour créer un compte</h1>
            </div>

            <div className="content" style={{ textAlign: 'center' }}>
                <h2>Étape 1</h2>
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
                    <h3>Nom Personnel</h3>
                </div>
                <div className="seperationLeft">
                    <form>
                        <label>
                            <input type="text" name="personalName" />
                        </label>
                    </form>
                </div>
            </div>

            <div className="seperationRight">

                {/* <div style={{pading:'20px',backgroundColor: '#f1356d', borderRadius: '8px'}}>
                    <Link Link to="/creeruncompteetape=2" style={{ color: 'white',  textDecoration: 'none' }}>Continuer</Link>
                </div> */}
                <button>
                    <Link to="/creeruncompteetape=2">Continuer</Link>
                </button>
            </div>


        </div>





    );
}

export default Createaccountstep1;