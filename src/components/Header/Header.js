import Search from './Search.js'
import NavBar from './NavBar.js'

function Header({
    navigationChangeHandler
}) {
        function clickHandler(e) {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            let url = new URL(e.target.href);
            navigationChangeHandler(url.pathname);

        }
    };
    return (
        <section className="navigation" onClick={clickHandler}>
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
                                <li><a href="/login" title="Login">Login</a></li>
                                <li><a href="/register" title="Sign Up">Register</a></li>
                                <li><a href="/logout" title="Logout">Logout</a></li>
                                <Search />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="fl_left">
                        <h1><a href="/home">paper flowers</a></h1>
                    </div>
                    <NavBar />
                </header>
            </div>
        </section>
    );
}
export default Header;