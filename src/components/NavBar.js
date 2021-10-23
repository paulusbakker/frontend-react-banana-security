import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';

function NavBar() {
    const history = useHistory();
    const {isAuthenticated, logoutFunction} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            {!isAuthenticated ?
                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>
                </div>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            logoutFunction();
                            console.log('Gebruiker is uitgelogd!');
                            // history.push('/')
                        }}
                    >
                        Log uit
                    </button>
                </div>}
        </nav>
    );
}

export default NavBar;