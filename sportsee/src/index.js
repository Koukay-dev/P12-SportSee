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


// mettre "?userid=18" ou "?userid=12" dans l'url pour naviguer entre les utilisateurs 
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get('userid') ?? false;

/* Note, pour passer des données de l'API aux données mockées, il suffit de modifier la variable situé dans ./constant/useMockedData.js */

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

