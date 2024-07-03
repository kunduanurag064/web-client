import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Layout from './components/Layout.jsx';
import Createnew from './components/Createnew.jsx';
import Profile from './components/Profile.jsx';
import Posts from './components/Posts.jsx';
import PostDetail from './components/PostDetail.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="new-article" element={<Createnew />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="profile" element={<Profile />}/>
                        <Route path="/profile/posts" element={<Posts />} >
                    
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
