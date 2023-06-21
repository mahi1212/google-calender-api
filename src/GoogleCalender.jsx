import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
    clientId: "163894081707-kp7376uehdsngen6r7b87n3h9kb34of1.apps.googleusercontent.com",
    apiKey: "AIzaSyAJyczGD_19m3ZoMj-6iWvZoxsgcSPXyvw",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
}

const apiCalendar = new ApiCalendar(config);

const DoubleButton = () => {
    const handleItemClick = (event, name) => {
        if (name === 'sign-in') {
            apiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            apiCalendar.handleSignoutClick();
        }
    }

    return (
        <>
            <button onClick={(e) => handleItemClick(e, 'sign-in')}>
                Sign In
            </button>
            <button onClick={(e) => handleItemClick(e, 'sign-out')}>
                Sign Out
            </button>
        </>
    );
};

export default DoubleButton;
