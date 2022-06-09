import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from "./components/pages/SignUp";
import DisplayObject from "./components/pages/ObjectShower";
import ObjectEditor from "./components/pages/ObjectEditor";
import NewProducerObject from "./components/pages/NewProducerObject";

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DisplayObject/>}/>
                <Route path="login/" element={<LoginPage/>}/>
                <Route path="producer/new" element={<NewProducerObject/>}/>

                <Route path="signup/" element={<SignUpPage/>}/>
                <Route path="publisher/" element={<DisplayObject/>}/>
                <Route path="publisher/:id/" element={<ObjectEditor/>} />
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
