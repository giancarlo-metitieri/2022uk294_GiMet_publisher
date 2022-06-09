import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import {LoggedInAsLabel} from "../atoms/LoggedInAsLabel";
import CreateNewItemButton from "../atoms/CreateNewItemButton";
import LogOutButton from "../atoms/LogOutButton";
export default function Navbar() {


    return (
        <div className="header" id="myHeader">
            <h2>Producers</h2>
            <LoggedInAsLabel/>
            <LogOutButton/>
            <CreateNewItemButton/>
        </div>);
}