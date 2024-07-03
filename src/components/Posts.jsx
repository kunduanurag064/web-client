

import React, { useState ,useEffect} from "react";
import Footer from "./Footer";
import axios from 'axios';
import './compcss.css'
import { userAuthentication } from "../user-authorisation";


const Posts = ()=>{
    const [posts, setPosts] = useState([]);
    const userid = localStorage.getItem('objId');

    const getData = async () => {
        if(!userid) return ;
        try {
            const response = await fetch(`https://web-server-nu-two.vercel.app/api/user/myposts?userid=${userid}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
        } catch (error) {
            console.log("error",error);
        }
    }
    
    useEffect(() => {
        getData();
      }, []);


let isloggedin = false;

    return(
        <>
        {  !userAuthentication() ? window.location.href="/login" : isloggedin=true  }
            <h1>Your Posts:-</h1>

            <div className="main-home-setdata-in-columns" >
            {posts.map((post) => (
                <div className="my-articles" key={post._id}>
            <img src={post.image} alt={post.title} style={{ width: "200px", height:"200px" }}  />
            <h2>{post.title}</h2>
            </div>
            
        ))}
            </div>
         
        <Footer/>
        </>
    )

}

export default Posts;
