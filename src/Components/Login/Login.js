import React from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFrameWork } from './LoginManager';
import google from '../../images/icons/google.png';
import logo from '../../images/logos/logo.png';
import jwt_decode from "jwt-decode";
const Login = () => {
    const token = sessionStorage.getItem('token')
    let user;
    if(token){
        user = jwt_decode(token);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    
    initializeLoginFrameWork()

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    
    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            sessionStorage.setItem('token',idToken)
          }).catch(function(error) {
            // Handle error
          });
    }
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                storeAuthToken();
                setTimeout(function(){ history.replace(from) }, 2000);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    
    
    return (
        <div className='container'>
        <Link to='/'><img className='logo center' src={logo} alt="logo"></img></Link>
            <div className="login-form">
            <h2 style={{textAlign: 'center',marginTop:'60px',fontWeight:'700'}} >Login With</h2>
            <div style={{ marginBottom: '50px' }} onClick={handleGoogleSignIn} className='continue-with-google'>
            <img className="google-logo" src={google} alt="google-logo"></img>
            <p>Continue With Google</p>
            </div>
            <p style={{textAlign:'center'}} >Dont Have an Account? <span style={{color:'blue',textDecoration:'underline',cursor:'pointer'}}>Create an Account</span></p>
            </div>
        </div>
    );
};

export default Login;