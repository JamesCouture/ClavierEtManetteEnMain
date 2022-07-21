import { useTranslation } from 'react-i18next'

const FAQG = () => {
    const { t } = useTranslation();
    return (
        <div className="content">
            <div className="spacingTop">
                <h1>{t('FAQWelcome')}</h1>
            </div>
            <div className="spacingTop">
                <h3>{t('FAQMessage')}</h3>
            </div>
            <div className="spacingTop">
                <h3 style={{color:"#5896C7"}}>{t('FAQQ1')}</h3>
                <p>{t('FAQR1')}</p>
            </div>
            <div className="spacingTop">
                <h3 style={{color:"#5896C7"}}>{t('FAQQ2')}</h3>
                <p>{t('FAQR2')}</p>
            </div>
            <div className="spacingTop">
                <h3 style={{color:"#5896C7"}}>{t('FAQQ3')}</h3>
                <p>{t('FAQR3')}</p>
            </div>
        </div>
    );
}

export default FAQG;