import { useTranslation } from 'react-i18next'

const Description = (props) => {

    const { t } = useTranslation();

    const tags = props.tagChild.split(",");
    const tagList = tags.map(function (tag, index) {
        return <h2 key={index} style={{ borderStyle: "solid", borderWidth: "1px", borderColor:"#5896C7",borderRadius:"8px",backgroundColor:"#d1f8ff"}}>{tag}</h2>;
    })
    return (
        <div className="description">
            <h2>{t('DescriptionTitre')}{props.titleChild}</h2>
            <h2>{t('DescriptionDifficulty')}{props.difficultyChild}</h2>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <h2>{t('DescriptionTag')}</h2>
                {tagList}
            </div>

            <h2>{t('DescriptionPrice')}{props.priceChild}</h2>
        </div>
    );
}

export default Description;