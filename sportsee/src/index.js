import React from 'react';
import ReactDOM from 'react-dom/client';
// Style
import './style/GlobalStyle.css'
/* Pages */
import Profile from './pages/Profile'
/* Components */
import Header from './components/Header';
import LeftNav from './components/LeftNav';
/* Context */
import { DataProvider } from './context/DataContext';

const userId = 12
// const userId = 18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className='lowerContent'>
      <LeftNav/>
      <DataProvider userId={userId}>
        <Profile />
      </DataProvider>
    </div>
  </React.StrictMode>
);

