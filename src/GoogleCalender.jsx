import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';

// clientId: '36728639176-6g0qhv5shafsrmdm5v4ncodgbmm85vvt.apps.googleusercontent.com',
// apiKey: 'AIzaSyAJyczGD_19m3ZoMj-6iWvZoxsgcSPXyvw',
// scope: 'https://www.googleapis.com/auth/calendar',
// discoveryDocs: [
//     'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
// ]

const GoogleCalender = () => {

    return (
        <GoogleOAuthProvider clientId="36728639176-6g0qhv5shafsrmdm5v4ncodgbmm85vvt.apps.googleusercontent.com">
            <GoogleLogin
                scope="https://www.googleapis.com/auth/calendar"
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleCalender;
