import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSingIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user
                const newUserInfo = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLogedInUser(newUserInfo)
                history.replace(from);

            }).catch((error) => {
                console.log(error.message)
            });

    }
    return (
        <div>
            <button className='btn button' onClick={handleGoogleSingIn}>sign in with google</button>
        </div>
    );
};

export default Login;