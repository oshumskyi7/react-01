import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>} />
          <Route path="/profile/*" element={<Profile store={props.store}/>} />
          <Route path="/news/*" element={<News />} />

        </Routes>
      </div>
    </div>

  );
}



export default App;
