import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/pages/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="login/" element={<Login/>}/>

            </Routes>
        </BrowserRouter>
      <Login />
    </div>);
}

export default App;
