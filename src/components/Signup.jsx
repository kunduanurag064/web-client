import React, { useState } from "react";
import './compcss.css';
import logo from '/src/assets/logo.jpg'; 
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Signup = ()=>{
    const [emailaddress , setEAdress] = useState("");
    const [password , setPass] = useState("");
    const [username,setName] = useState("");
    const history = useHistory();

    function navigateToLogin() {
        history.push('/login');
    }

    const handlesignup = async (e) => {
        if(password.length<6){
            alert("Pawword length must be more than 6.");
            return ;
        }
        else if(emailaddress.length<1 && username.length<1){
            alert("invalid email or username");
            return ;
        }
       try {
        const response = await fetch('https://web-server-nu-two.vercel.app/api/user/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, emailaddress, password })
        }) 
        if (response.ok) {

          }
          else{
            throw new Error("Network response was not ok.");
          }
  
          const userDetails = await response.text();
          console.log('email received from server:', userDetails);
          if( userDetails === emailaddress ){
            navigateToLogin();
          }
       } catch (error) {
        console.log("there is an error ",error);
        alert("try again with different username,email and password.");
        setEaddress("");
        setPass("");
        setName("");
       }
    }


    return(
        <>
        <div className="container">
            <div className="user-login-landingpage">
                <br/>
                <center><img src={logo} width={75} height={75}/></center>
                <h2>&nbsp;&nbsp;Already Have an Account?<Link to="../login" style={{color:"black"}}>Login</Link></h2>
                <br/><br/>
                <label htmlFor="username"> Username : </label><br/>
                <input type="text" required value={username} placeholder="Enter username :- " onChange={(e)=>{setName(e.target.value)}} className="login-inputs"/>
                <br/>
                <label htmlFor="Email"> Email : </label><br/>
                <input type="email" required value={emailaddress} placeholder="Enter email adress:-" onChange={(e)=>{setEAdress(e.target.value)}} className="login-inputs"/>
                <br/>
                <label htmlFor="password"> Password : </label><br/>
                <input type="password" required value={password} placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}} className="login-inputs"/>

                <button className="create-account-button" onClick={handlesignup}>Create Account</button>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
        </>
    )

}

export default Signup;
