import { Link } from 'react-router-dom';

import ContactNavBar from './ContactNavBar.js';
import Search from './Search.js'
import NavBar from './NavBar.js'

function Header({user}) {
    console.log(user)
    let auth = (
        <>
            <li><Link to="/login" title="Login">Login</Link></li>
            <li><Link to="/register" title="Sign Up">Register</Link></li>
        </>
    )
    let logout = (
        <>
            <li><Link to="/logout" title="Logout">Logout</Link></li>
        </>
    )
    return (
        <section>
            {/* Top Background Image Wrapper */}
            <div className="wrapper row0">
                <div id="topbar" className="hoc clear">
                <ContactNavBar />
                    <div className="fl_right">
                        <ul className="nospace">
                            {user.email
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
                    <NavBar />
                </header>
            </div>
        </section>
    );
}
export default Header;