
function SearchBar(props) {
    const { filterProduct, check } = props;
    return (
        <div>
            <p>Search</p>
            <input type="text" id="search" onChange={
                (e) => filterProduct(e.target.value)
            } />
            <br></br>
            <div id="checkbox">
                <input type="checkbox" onChange={(e) => check(e.target.checked)} />
                <label id="label" for="checkbox"> Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar