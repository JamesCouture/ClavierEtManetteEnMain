import ReactPlayer from "react-player"
import Description from "./Description";
import { useTranslation } from 'react-i18next'

const SilksongArticle = () => {
    const { t } = useTranslation();

    return (
        <div className="silksongarticle">

            <div className="content" style={{ justifyContent: 'center', display: "flex" }}>
                <ReactPlayer url="https://youtu.be/JSfuFlhsxZY" controls='true' style={{ justifyContent: 'center' }} />
            </div>

            <Description titleChild={'Silksong'} difficultyChild={t('SilksongDifficulty')} tagChild={t('Silksongtag')} priceChild={t('SilksongPrice')} />

            <div className="spacingTop">
                <p>
                    {t('SilksongP1')}
                </p>
            </div>

            <div className="spacingTop">
                <p>
                    {t('SilksongP2')}
                </p>
            </div>

            <div className="spacingTop">
                <h4>
                    {t('SilksongP3')}
                </h4>
            </div>
        </div>
    );
}

export default SilksongArticle;