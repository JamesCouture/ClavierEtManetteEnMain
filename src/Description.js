const Description = (props) => {

    const tags = props.tagChild.split(",");
    const tagList = tags.map(function (tag, index) {
        return <h2 key={index} style={{ borderStyle: "solid", borderWidth: "1px", borderColor:"#5896C7",borderRadius:"8px",backgroundColor:"#d1f8ff"}}>{tag}</h2>;
    })
    return (
        <div className="description">
            <h2>Titre: {props.titleChild}</h2>
            <h2>Difficulté: {props.difficultyChild}</h2>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <h2>Tags:</h2>
                {tagList}
            </div>

            <h2>Prix estimé: {props.priceChild}</h2>
        </div>
    );
}

export default Description;