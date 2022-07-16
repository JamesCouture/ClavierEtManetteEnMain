import Post from './Post'

const Forum = () => {
    return (
        <div className="forum">

            <div className="content" style={{ textAlign: 'center', padding: "50px" }}>
                <h1>Bienvenue à la page de Forum</h1>
            </div>

            <Post className="forumPost" title={"Problème de volant pour Formule 1 2022"}
                authorText={"Jossef: J'ai essayer le jeu, et j'ai de la misère à ajuster mon volant. La sensitivité est trop haute pour pouvoir faire des virages avec précision."}
                replyText={"Yanik: Il faut que tu rentre dans les settings, sous les options du 'manette'. Le jeu reconnait le volant comme un manette, et là tu auras l'option de changer la sensitivité de ton volant."}
            />

            <Post className="forumPost" title={"Problème de volant pour Formule 1 2022"}
                authorText={"Jossef: J'ai essayer le jeu, et j'ai de la misère à ajuster mon volant. La sensitivité est trop haute pour pouvoir faire des virages avec précision."}
                replyText={"Yanik: Il faut que tu rentre dans les settings, sous les options du 'manette'. Le jeu reconnait le volant comme un manette, et là tu auras l'option de changer la sensitivité de ton volant."}
            />

            <Post className="forumPost" title={"Difficulté de Doom Eternal dans niveau master"}
                authorText={"Jossef: Le jeu est tout simplement trop difficile pour pouvoir s'amuser. C'est quoi le but d'avoir une option du jeu ou la majorité ne peuvent pas jouer."}
                replyText={"Yanik: Le jeu peut parfois sembler impossible. Je recommende d'apprendre les combos pour faire du dps plus haut. De là, quand tu t'y habitu, tu poura t'amuser avec. Le but d'avoir ses modes, c'est pour suporter les joueurs plus hardcore."}
            />

            <div className="addComment">
                <h3>Ajouter un commentaire</h3>
                <form>
                    <p>Titre</p>
                    <label style={{ paddingLeft: '50px' }}>
                        <input type="text" name="title" style={{ height: '24px', fontSize: '22px', width: '700px' }} />
                    </label>
                </form>
                <form>
                    <p>Commentaire</p>
                    <label style={{ paddingLeft: '50px' }}>
                        <input type="text" name="comment" style={{ height: '72px', fontSize: '22px', width: '700px' }} />
                    </label>
                </form>
                <div style={{ paddingRight: '50px', paddingTop: '20px', justifyContent: 'right', display: 'flex' }}>
                    <button>
                        <p>Commenter</p>
                    </button>
                </div>
            </div>


        </div>

    );
}

export default Forum;