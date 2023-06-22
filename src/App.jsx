import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleCalender from './GoogleCalender';

function App() {

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
      <GoogleCalender />
    </>
  );
}

export default App
