import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const CLIENT_ID = '163894081707-kp7376uehdsngen6r7b87n3h9kb34of1.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAJyczGD_19m3ZoMj-6iWvZoxsgcSPXyvw';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadGapiClient = async () => {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

      window.gapi.load('client', initializeGapiClient);
    };

    loadGapiClient();
  }, []);

  const initializeGapiClient = async () => {
    try {
      await window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: [DISCOVERY_DOC],
        scope: SCOPES,
      });
      setIsAuthorized(true);
    } catch (error) {
      console.error('Error initializing Google Calendar API:', error);
    }
  };

  const handleAuthClick = async () => {
    try {
      if (isAuthorized) {
        await window.gapi.auth2.getAuthInstance().signOut();
        setIsAuthorized(false);
        setEvents([]);
      } else {
        await window.gapi.auth2.getAuthInstance().signIn();
        setIsAuthorized(true);
        await listUpcomingEvents();
      }
    } catch (error) {
      console.error('Error authenticating with Google Calendar API:', error);
    }
  };

  const listUpcomingEvents = async () => {
    try {
      const response = await window.gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });
      setEvents(response.result.items || []);
    } catch (error) {
      console.error('Error retrieving events from Google Calendar API:', error);
      setError(error.message);
      setEvents([]);
    }
  };

  return (
    <>
      <div style={{ marginTop: '-150px' }}>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='headline'>
        <h2 style={{ color: '#ccc' }}>LET'S INTEGRATE WITH <span style={{ color: '#fff' }}>GOOGLE CALENDAR</span> API</h2>
      </div>
      <div className="card">
        <button id="authorize_button" onClick={handleAuthClick}>
          {isAuthorized ? 'Sign Out' : 'Authorize'}
        </button>
        {isAuthorized && (
          <div>
            <h3>Upcoming Events:</h3>
            {events.length > 0 ? (
              <ul>
                {events.map((event) => (
                  <li key={event.id}>
                    {event.summary} ({event.start.dateTime || event.start.date})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events found.</p>
            )}
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default App
