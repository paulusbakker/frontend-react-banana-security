import React, {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";


function SignUp() {

    const {loginFunction} = useContext(AuthContext);
    const history = useHistory();


    function handleSubmit() {
        loginFunction();
        history.push('/');
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit}>
                <p>*Invoervelden*</p>
                <button type="submit">Registeren</button>

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;