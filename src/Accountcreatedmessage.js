import { Link } from 'react-router-dom';

const Accountcreatedmessage = () => {
    return (
        <div className="accountcreated">
            <div className="content" style={{ textAlign: 'center', paddingTop: "50px" }}>
                <h1>Compte Créé. Vous avez maintenant accès à votre compte!</h1>
            </div>
            <div className="content" style={{display:'flex',justifyContent:"center",marginTop:"0px"}}>
                <button style={{display:'flex',justifyContent:"center", marginLeft:'auto',marginRight:'auto'}}>
                    <Link to="/">Revenir à la page d'acceuil</Link>
                </button>
            </div>

        </div>
    );
}

export default Accountcreatedmessage;