import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
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

    const handlegoogleSignOut = () => {
        firebase.auth().signOut().then(() => {
            const logOutInfo = {
                name: '',
                email: '',
                photo: ''
            }
            setLogedInUser(logOutInfo)
          }).catch((error) => {
              console.log(error)
          });
    }

    return (
        <div className=''>
            <Navbar />
            <div className='py-5 text-center'>
            {
                logedInUser.email ? <button className='btn button' onClick={handlegoogleSignOut}>sign out with google</button> : <button className='btn button' onClick={handleGoogleSignIn}>sign in with google</button>
            }
            </div>
            <Footer />
        </div>
    );
};

export default Login;