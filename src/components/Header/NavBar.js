import { Link } from 'react-router-dom';
function NavBar() {

    return (
        <nav id="mainav" className="fl_right">
            <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li ><Link to="/posts">YourStories</Link></li>
                <li><Link to="/myFavorites">MyFavorites</Link></li>
            </ul>

        </nav>
    );
}
export default NavBar;