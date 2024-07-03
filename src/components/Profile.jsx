import React, { useState ,useEffect} from "react";
import Footer from "./Footer";
import axios from 'axios';
import user_profile from '/src/assets/user_profile.jpg';
import nameOfUser from "./Layout"
import './compcss.css';
import { Link } from "react-router-dom";
import { userAuthentication } from "../user-authorisation";


const Profile = ()=>{

    

    const handleLogout = ()=>{

        localStorage.removeItem('objId');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        // localStorage.clear();
        window.location.href="/";

    }
    
    const nameOfUser = localStorage.getItem('username');
    let isloggedin = false;

    return(
        <>
        {  !userAuthentication() ? window.location.href="/login" : isloggedin=true  }
         <h1>&nbsp;</h1>
         <img src={user_profile} alt="user_profile_here"/>
         <h1>&nbsp;</h1>
         <h1 style={{marginBottom:"20px"}}>Welcome,&nbsp; {nameOfUser}</h1>

         <Link to="posts"><button className="show-user-posts-button">show my posts</button></Link><br/>

         <button className="logout-button" onClick={handleLogout}>LogOut from Site</button>

        <Footer/>
        </>
    )

}

export default Profile;