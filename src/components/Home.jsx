import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from 'axios';
import { userAuthentication } from '../user-authorisation.js';
import './compcss.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await fetch('http://web-server-nu-two.vercel.app//api/user/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handlePostClick = (post) => {
        navigate(`/post/${post._id}`, { state: { post } });
    };

    return (
        <>
            {
                !userAuthentication() ? <h1 style={{ textAlign: "center" }}>You can read. But to post Login or Signup</h1> : <h1 style={{ textAlign: "center", color: "blueviolet" }}>Welcome to : The Articles</h1>
            }
            <div className="main-home-division-element">
                <div className="main-home-setdata-in-columns">
                    {posts.map((post) => (
                        <div className="my-articles" key={post._id} onClick={() => handlePostClick(post)} style={{cursor:"pointer"}}>
                            <img src={post.image} alt={post.title} style={{ width: "200px", height: "200px" }} />
                            <h2>{post.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;
