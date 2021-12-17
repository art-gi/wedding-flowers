import { Link } from 'react-router-dom';
function NavBar(name) {
    const allUsers = (
        <>
            <li className="active"><Link to="/">Home</Link></li>
            <li className="active"><Link to="/">YourStories</Link></li>
        </>
    )
    return (
        <nav id="mainav" className="fl_right">
            {allUsers}
        </nav>
    );
}
export default NavBar;