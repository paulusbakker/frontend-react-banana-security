import React, {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


function SignIn() {

    const {loginFunction} = useContext(AuthContext);
    const history = useHistory();


    function handleLogin() {
        loginFunction();
        history.push('/');
        console.log('Gebruiker is ingelogd!');

    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleLogin}>
                <p>*invoervelden*</p>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;