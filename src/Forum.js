import Post from './Post'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react';
import React from 'react';
import { AccountContext } from './Helper/Context';
import { useContext } from 'react'


const Forum = () => {
    const { t } = useTranslation();

    const { accountUserName, setAccountUserName } = useContext(AccountContext)
    const [PostList, setPostList] = useState([]);

    const clickHandler = () => {

        const newPostList = [...PostList];
        newPostList.push({ 'title': document.getElementById("title").value, 'text': accountUserName + ": " + document.getElementById("commentaire").value })
        setPostList(newPostList);
    }

    const PostListComp = PostList.map((post, index) => {
        return <div className="post" style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "#5896C7", borderRadius: "8px", backgroundColor: "#c7fff9" }}>
            <h3 style={{ color: "#5896C7" }}>{post.title}</h3>

            <div className="forumContent">
                <p style={{ whiteSpace: 'initial' }}>{post.text}</p>
            </div>

        </div>
    })

    return (
        <div className="forum">

            <div className="content" style={{ textAlign: 'center', padding: "50px" }}>
                <h1>{t('ForumBienvenue')}</h1>
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

            {PostListComp}

            <div className="addComment">
                <h3>{t('ForumAjouter')}</h3>
                <form>
                    <p>{t('ForumTitre')}</p>
                    <label style={{ paddingLeft: '50px' }}>
                        <input type="text" name="title" id="title" defaultValue='d' style={{ height: '24px', fontSize: '22px', width: '700px' }} />
                    </label>
                </form>
                <form>
                    <p>{t('ForumCommentaire')}</p>
                    <label style={{ paddingLeft: '50px' }}>
                        <textarea type="text" name="comment" id="commentaire" defaultValue='d' style={{ height: '72px', fontSize: '22px', width: '700px' }} />
                    </label>
                </form>
                <div style={{ paddingRight: '50px', paddingTop: '20px', justifyContent: 'right', display: 'flex' }}>

                    <button onClick={() => { { clickHandler() } }}>
                        <p>{t('ForumCommenter')}</p>
                    </button>

                </div>
            </div>

        </div>

    );


}

export default Forum;