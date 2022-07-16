import ReactPlayer from "react-player"
import Description from "./Description";

const SilksongArticle = () => {

    return (
        <div className="silksongarticle">

            <div className="content" style={{ justifyContent: 'center', display: "flex" }}>
                <ReactPlayer url="https://youtu.be/JSfuFlhsxZY" controls='true' style={{ justifyContent: 'center' }} />
            </div>

            <Description titleChild={'Silksong'} difficultyChild={'4/5 - difficile'} tagChild={'Action,Aventure'} priceChild={'$24'} />

            <p>Malgré une conférence d’ouverture qui a divisé la communauté, le Summer Game Fest 2022 est loin d’être fini. Se tiendront cet après-midi les Guerrilla Collective et Wholesome Direct axés autour des jeux indépendants et AA, tandis que le Future Games Show pourrait réserver quelques belles annonces en termes de gameplay. Mais c’est surtout le Xbox + Bethesda Showcase qui est attendu au tournant et il devrait être porteur de bonne nouvelle pour ceux qui attendent impatiemment un certain metroidvania.
                <br /><br />
                Selon l’insider « The Snitch », Hollow Knight Silksong sera disponible Day One sur le Xbox Game Pass. A ce stade on peut presque enlever le conditionnel puisque la source en question a leaké l’intégralité du State of Play et la date de sortie de The Last of Us Remake. Il se pourrait donc que la suite d’Hollow Knight refasse parler d’elle pendant la conférence Xbox, espérons-le avec de nouvelles images et une date de sortie également. </p>
            <div>
                <h4><br /><br /><br />Disclaimer: Ces paragraphes ont été pris du site web suivant "https://www.gameblog.fr/jeu-video/ed/news/hollow-knight-silksong-prepare-une-enorme-surprise-sur-xbox-402444", utilisé pour démontrer le site web.</h4>
            </div>
        </div>
    );
}

export default SilksongArticle;