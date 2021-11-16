function Search() {
    return (
    <li id="searchform">
    <div>
        <form action="#" method="post">
            <fieldset>
                <legend>Quick Search:</legend>
                <input type="text" placeholder="Enter search term&hellip;" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </fieldset>
        </form>
    </div>
</li>
);
}
export default Search;