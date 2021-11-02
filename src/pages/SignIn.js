import React, {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from 'react-hook-form';


function SignIn() {

    const {loginFunction} = useContext(AuthContext);
    const history = useHistory();
    // const { handleSubmit, register, errors } = useForm();
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});


    function onSubmit(data) {
        console.log(data);
        data.preventDefault();
        loginFunction();
        history.push('/');
        console.log('Gebruiker is ingelogd!');

    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    type='text'
                    id='email'
                    {...register('email', {
                        required: 'wachtwoord mag niet leeg zijn',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                        value: "email adres"
                    })}
                />
                {errors.email && errors.email.message}

                <input
                    type='text'
                    id='id'
                    {...register('password', {
                        required: 'wachtwoord mag niet leeg zijn',
                        validate: value => value !== "admin" || "Nice try!",
                        value: 'wachtwoord'
                    })}
                />
                {errors.password && <div>{errors.password.message}</div>}


                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;