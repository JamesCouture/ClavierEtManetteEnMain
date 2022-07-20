import ReactPlayer from "react-player"
import Description from "./Description";
import { useTranslation } from 'react-i18next'

const Cuphead = () => {
    const { t } = useTranslation();

    return (
        <div className="silksongarticle">

            <div className="content" style={{ justifyContent: 'center', display: "flex" }}>
                <ReactPlayer url="https://www.youtube.com/watch?v=lVjA8-GHl-c&ab_channel=Nintendo" controls='true' style={{ justifyContent: 'center' }} />
            </div>

            <Description titleChild={'Doom Eternal'} difficultyChild={t('CupheadDifficulty')} tagChild={t('Cupheadtag')} priceChild={t('CupheadPrice')} />

            <div className="spacingTop">
                <p>
                    {t('CupheadP1')}
                </p>
            </div>

            <div className="spacingTop">
                <p>
                    {t('CupheadP2')}
                </p>
            </div>

            <div className="spacingTop">
                <h4>
                    {t('CupheadP3')}
                </h4>
            </div>

        </div>
    );
}

export default Cuphead;