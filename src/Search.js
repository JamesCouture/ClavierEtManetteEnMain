const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search" style={{ paddingRight: '10px', justifyContent: "right", display: "flex" }}>
            <span className="visually-hidden">Recherche de conversation forum</span>
        </label>
        <div style={{ paddingLeft: '10px', justifyContent:"right",display:"flex" }}>
            <input
                type="text"
                id="header-search"
                placeholder="Chercher forum"
                name="s"
            />

            <button type="submit" style={{ fontSize: '20px', height: '27px' }}>Chercher</button>
        </div>

    </form>
);

export default SearchBar;