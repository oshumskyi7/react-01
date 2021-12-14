import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';


const App = (props) => {



  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile/*" element={<Profile state={props.state.profilePage} />} />
            <Route path="/news/*" element={<News />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
