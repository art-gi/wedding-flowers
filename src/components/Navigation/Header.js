import NavBar from './NavBar.js';

function Header() {
    return (
        <>
            <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="fl_left">
                        <h1><a href="/home">paper flowers</a></h1>
                    </div>
                    <NavBar />
                </header>
            </div>
        </>
    );
}
export default Header;