import React from 'react';
import ReactDOM from 'react-dom/client';

/* Pages */
import Profile from './pages/Profile'

/* Components */
import Header from './components/Header';
import LeftNav from './components/LeftNav';

// Style
import './style/GlobalStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className='lowerContent'>
      <LeftNav/>
      <Profile />
    </div>
  </React.StrictMode>
);

