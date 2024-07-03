import React, { useState } from "react";
import './compcss.css';
import logo from '/src/assets/logo.jpg'; 
import { Link, json } from "react-router-dom";

import Footer from "./Footer";

const Login = ()=>{


    const [emailaddress , setEAdress] = useState("");
    const [password , setPass] = useState("");

    const handlesignIn = async (e)=>{
        setEAdress(emailaddress.trim());
        setPass(password.trim());
        if(emailaddress.length<1 && password.length<1){
            alert("Give valid emailaddress and password!");
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/user/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({emailaddress,password})
            });
            if (response.ok) {
              const data = await response.json();
              console.log('Message:', data.msg); // Log the message to the console
              console.log('Token:', data.token); // Log the token to the console
              console.log('User ID:', data.userId);
              localStorage.setItem("token",data.token);
              localStorage.setItem("objId",data.userId);
              localStorage.setItem("username",data.email);
              window.location.href="/";
              }
            else{
                alert('give correct email and password!');
                setEAdress("");
                setPass("");
            }
            
        } catch (error) {
            alert("data not exists please sign up");
            setEAdress("");
            setPass("");
        }

    }

    return(
        <>
        <div className="container">
            <div className="user-login-landingpage">
                <br/>
                <center><img src={logo} width={75} height={75}/></center>
                <h2>&nbsp;&nbsp;Don't Have an Account?<Link to="../signup" style={{color:"black"}}>Signup</Link></h2>
                <br/><br/>
                <label htmlFor="Email"> Email : </label><br/>
                <input type="email" required value={emailaddress} placeholder="Enter email adress:-" onChange={(e)=>{setEAdress(e.target.value)}} className="login-inputs"/>
                <br/>
                <label htmlFor="password"> Password : </label><br/>
                <input type="password" required value={password} placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}} className="login-inputs"/>

                <button className="login-submit-button" onClick={handlesignIn}>Log In</button>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
        </>
    )

}

export default Login;