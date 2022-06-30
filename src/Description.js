const Description = (props) => {
    return (
        <div className="description">
            <h2>Titre: {props.titleChild}</h2>
            <h2>Difficulté: {props.difficultyChild}</h2>
            <h2>Prix temptatif: {props.priceChild}</h2>
        </div>
    );
}

export default Description;