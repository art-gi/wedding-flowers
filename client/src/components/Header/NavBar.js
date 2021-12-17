import { Link } from 'react-router-dom';
function NavBar() {

    return (
        <nav id="mainav" className="fl_right">
                <li className="active"><Link to="/">Home</Link></li>
                <li className="active"><Link to="/">YourStories</Link></li>
        </nav>
    );
}
export default NavBar;