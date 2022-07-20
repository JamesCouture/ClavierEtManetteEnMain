import ReactPlayer from "react-player"
import Description from "./Description";
import { useTranslation } from 'react-i18next'

const Doom = () => {
    const { t } = useTranslation();

    return (
        <div className="silksongarticle">

            <div className="content" style={{ justifyContent: 'center', display: "flex" }}>
                <ReactPlayer url="https://www.youtube.com/watch?v=_J2YcaVqjCQ&ab_channel=BethesdaSoftworksUK" controls='true' style={{ justifyContent: 'center' }} />
            </div>

            <Description titleChild={'Doom Eternal'} difficultyChild={t('DoomDifficulty')} tagChild={t('Doomtag')} priceChild={t('DoomPrice')} />

            <div className="spacingTop">
                <p>
                    {t('DoomP1')}
                </p>
            </div>

            <div className="spacingTop">
                <p>
                    {t('DoomP2')}
                </p>
            </div>

            <div className="spacingTop">
                <p>
                    {t('DoomP3')}
                </p>
            </div>

            <div className="spacingTop">
                <h4>
                    {t('DoomP4')}
                </h4>
            </div>

        </div>
    );
}

export default Doom;