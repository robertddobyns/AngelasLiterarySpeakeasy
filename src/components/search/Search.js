const Search = () => {
    const search = new URLSearchParams(window.location.search).get('search');

    const handleClearForm = () => {
        window.location = window.location.pathname;
    }

    return (
        <form action="/" method="get" className={"search-form"}>
            <input
                type="text"
                id="search"
                className={"search"}
                placeholder="Search for books"
                name="search"
                defaultValue={search}
            />
            <button type="submit" className={"search-button"}>Search</button>
            <button type="reset" onClick={handleClearForm} className={"search-button"}>Clear Search</button>
        </form>
    )

}

export default Search;