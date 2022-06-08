import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from "./components/pages/SignUp";
import DisplayObject from "./components/pages/ObjectShower";
import ObjectEditor from "./components/pages/ObjectEditor";

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="login/" element={<LoginPage/>}/>
                <Route path="signup/" element={<SignUpPage/>}/>
                <Route path="producer/" element={<DisplayObject/>}/>
                <Route path="producer/:id/" element={<ObjectEditor/>} />
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
