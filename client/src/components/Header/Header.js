import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import ContactNavBar from './ContactNavBar.js';


function Header() {
    const { user } = useContext(AuthContext);

    let auth = (
        <>
            <li><Link to="/login" title="Login">Login</Link></li>
            <li><Link to="/register" title="Sign Up">Register</Link></li>
        </>
    );
    let userBtn = (
        <>
             <li><Link to="/my-listings">My Listings</Link></li>
            <li><Link to="/my-reviews">My Reviews</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
            <li><Link to="/add-item">Add a listing</Link></li>
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
                            ? userBtn
                            : ''}

                    </nav>
                </header>
            </div>
        </section>
    );
}
export default Header;