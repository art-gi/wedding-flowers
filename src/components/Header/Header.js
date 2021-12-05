import { Link } from 'react-router-dom';

import Search from './Search.js'
import NavBar from './NavBar.js'

function Header() {
    return (
        <section className="navigation">
            {/* Top Background Image Wrapper */}
                <div className="wrapper row0">
                    <div id="topbar" className="hoc clear">
                        <div className="fl_left">
                            <ul className="nospace">
                                <li><i className="fas fa-phone rgtspace-5"></i> +3598935899</li>
                                <li><i className="far fa-envelope rgtspace-5"></i> artgi@mail.bg</li>
                            </ul>
                        </div>
                        <div className="fl_right">
                            <ul className="nospace">
                                <li><Link to="/login" title="Login">Login</Link></li>
                                <li><Link to="/register" title="Sign Up">Register</Link></li>
                                <li><Link to="/logout" title="Logout">Logout</Link></li>
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