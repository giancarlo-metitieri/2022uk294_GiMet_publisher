import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/pages/Login'
import {BrowserRouter, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import SignUpPage from "./components/pages/SignUp";
import DisplayObject from "./components/pages/ObjectShower";
import ObjectEditor from "./components/pages/ObjectEditor";
import NewProducerObject from "./components/pages/NewProducerObject";
import PageForward from "./components/pages/PageForward";
import {BASE_URL} from "./services/Api";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageForward/>}/>
                <Route path="login/" element={<LoginPage/>}/>
                <Route path="publisher/new" element={<NewProducerObject/>}/>

                <Route path="signup/" element={<SignUpPage/>}/>
                <Route path="publisher/" element={<DisplayObject/>}/>
                <Route path="publisher/:id/" element={<ObjectEditor/>} />
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
