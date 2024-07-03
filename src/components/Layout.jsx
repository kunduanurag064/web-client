// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './compcss.css';
import logo from '/src/assets/logo.jpg'; 
import { userAuthentication } from '../user-authorisation';


function Layout() {
    // const nameOfUser = localStorage.getItem('username');
    // const [isLoggedin, setLoginState] = useState(false);

    // useEffect(() => {
    //     if (nameOfUser) {
    //         setLoginState(true);
    //     }
    // }, [nameOfUser]);

    return (
        <>
            <header className="myheader">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className='header-division'>
                    <div className='header-division-paths'>
                        <Link to="/" className='custom-color'>
                            Home
                        </Link>
                    </div>
                    {userAuthentication() ? (
                        <>
                            <div className='header-division-paths'>
                                <Link to="new-article" className='custom-color'>
                                    Create-Post
                                </Link>
                            </div>
                            <div className='header-division-paths'>
                                <Link to="profile" className='custom-color'>
                                    Profile
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='header-division-paths'>
                                <Link to="login" className='custom-color'>
                                    Login
                                </Link>
                            </div>
                            <div className='header-division-paths'>
                                <Link to="signup" className='custom-color'>
                                    Signup
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;
