import ReactPlayer from "react-player"
import Description from "./Description";
import { useTranslation } from 'react-i18next'

const F12022 = () => {
    const { t } = useTranslation();

    return (
        <div className="silksongarticle">

            <div className="content" style={{ justifyContent: 'center', display: "flex" }}>
                <ReactPlayer url="https://www.youtube.com/watch?v=Nx9NgXi8nP8&ab_channel=F1%C2%AEGamesFromCodemasters" controls='true' style={{ justifyContent: 'center' }} />
            </div>

            <Description titleChild={'F1 2022'} difficultyChild={t('F12022Difficulty')} tagChild={t('F12022tag')} priceChild={t('F12022Price')} />

            <div className="spacingTop">
                <p>
                    {t('F12022P1')}
                </p>
            </div>

            <div className="spacingTop">
                <p>
                    {t('F12022P2')}
                </p>
            </div>

            <div className="spacingTop">
                <h4>
                    {t('F12022P3')}
                </h4>
            </div>

        </div>
    );
}

export default F12022;