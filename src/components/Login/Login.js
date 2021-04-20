import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faGoogle);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var user = result.user;
                const { displayName, email } = user;
                console.log(displayName, email);
                const googleLoggedInUser = {
                    isLoggedIn: true,
                    name: displayName,
                    email: email
                };
                setUserLoggedIn(googleLoggedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg" onClick={handleGoogleLogIn}>
                <FontAwesomeIcon icon={faGoogle} size="2x"/><span className="ms-3 fs-3">Log in with Google</span>
            </button>            
        </div>
    );
};

export default Login;