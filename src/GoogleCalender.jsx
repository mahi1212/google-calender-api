import React, { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
    "clientId": "36728639176-6g0qhv5shafsrmdm5v4ncodgbmm85vvt.apps.googleusercontent.com",
    "apiKey": "AIzaSyBRUqciESvTFk0OP7IOOCcy80-ABGUOOpo",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
};

const apiCalendar = new ApiCalendar(config);

const GoogleCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            if (apiCalendar.sign) {
                try {
                    const response = await apiCalendar.listUpcomingEvents();
                    setEvents(response.result.items);
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            }
        };

        fetchEvents();
    }, []);

    const handleItemClick = (event, name) => {
        if (name === 'sign-in') {
            apiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            apiCalendar.handleSignoutClick();
            setEvents([]); // Clear events when signing out
        }
    };

    return (
        <>
            {apiCalendar.sign ? (
                <div>
                    <button onClick={(e) => handleItemClick(e, 'sign-out')}>
                        Sign Out
                    </button>
                    <h2>Upcoming Events:</h2>
                    {events.length > 0 ? (
                        <ul>
                            {events.map(event => (
                                <li key={event.id}>{event.summary}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </div>
            ) : (
                <button onClick={(e) => handleItemClick(e, 'sign-in')}>
                    Sign In with Google
                </button>
            )}
        </>
    );
};

export default GoogleCalendar;
