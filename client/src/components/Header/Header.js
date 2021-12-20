import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import ContactNavBar from './ContactNavBar.js';
import Search from './Search.js'

function Header() {
    const {user} = useContext(AuthContext);
    
    let auth = (
        <>
            <li><Link to="/login" title="Login">Login</Link></li>
            <li><Link to="/register" title="Sign Up">Register</Link></li>
        </>
    );
    let logout = (
        <>
            <li><Link to="/logout" title="Logout">Logout</Link></li>
        </>
    );
    let allUsers = (
        <>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/your-stories">YourStories</Link></li>
        </>
    );
    let adminUsers = (
        <>
            <li ><Link to="/add-item">Add Item</Link></li>
            <li ><Link to="/edit-item">Edit Item</Link></li>

        </>
    );
    return (
        <section  >
                {/* Top Background Image Wrapper */}
                <div className="wrapper row0">
                    <div id="topbar" className="hoc clear">
                        <ContactNavBar />
                        <div className="fl_right">
                            <ul className="nospace">
                                {user?.email
                                    ? logout
                                    : auth
                                }
                                <Search />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wrapper row1">
                    <header id="header" className="hoc clear">
                        <div id="logo" className="fl_left">
                            <h1><Link to="/">paper flowers</Link></h1>
                        </div>
                        <nav id="mainav" className="fl_right">
                            {allUsers}
                            {user?.email
                                ? adminUsers
                                : ''}

                        </nav>
                    </header>
                </div>
        </section>
    );
}
export default Header;