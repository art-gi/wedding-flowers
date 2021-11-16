function NavBar() {

    return ( 
        <nav id="mainav" className="fl_right">
            <ul className="clear">
                <li className="active"><a href="/home">Home</a></li>
                <li><a className="drop" href="/catalog">Catalog</a>
                    <ul>
                        <li><a href="/catalog/gallery">Gallery</a></li>
                    </ul>
                </li>
                <li><a className="drop" href="/reviews">Reviews</a></li>
                <li><a href="/customer stories">Customer Stories</a></li>
            </ul>
        </nav>
    );
}
export default NavBar;