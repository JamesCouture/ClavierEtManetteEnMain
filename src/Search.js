const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Recherche de conversation forum</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Chercher forum"
            name="s" 
        />
        <button type="submit">Chercher</button>
    </form>
);

export default SearchBar;