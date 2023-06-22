import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'

const GoogleNew = () => {
    return (
        <GoogleOAuthProvider clientId="36728639176-6g0qhv5shafsrmdm5v4ncodgbmm85vvt.apps.googleusercontent.com">
            <GoogleLogin
                scope="https://www.googleapis.com/auth/calender"
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    )
}

export default GoogleNew