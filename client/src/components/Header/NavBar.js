import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { Link } from 'react-router-dom';

function NavBar() {
    const { user } = useContext(AuthContext);
    console.log(user)
    let allUsers = (
        <>
            <li className="active"><Link to="/">Home</Link></li>
            <li className="active"><Link to="/your-stories">YourStories</Link></li>
        </>
    );
    let adminUsers = (
        <>
            <li className="active"><Link to="/add-item">AddItem</Link></li>

        </>
    );

    return (
        <nav id="mainav" className="fl_right">

            {user.email
                ? adminUsers
                : ''}
                {allUsers}
        </nav>
    );
}
export default NavBar;