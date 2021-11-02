import React, {createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false);

    function login() {
        toggleIsAuth(true)
    }

    function logout() {
        toggleIsAuth(false)
    }

    const authData ={
        isAuthenticated : isAuth,
        loginFunction: login,
        logoutFunction: logout,
    }



    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider