import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'

const GoogleNew = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.CLIENTID}>
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