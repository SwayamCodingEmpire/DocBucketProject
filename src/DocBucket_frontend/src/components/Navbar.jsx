import React from 'react'
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import Upload from './Upload';
import Home from './Home';
import Login from './Login';
import Result from './Result';


function Navbar() {


    return (
        <BrowserRouter>
            <nav className="navbar" >
                <div className='navbar-logo'><Link to="/"><a> DocBucket </a></Link></div>

                <div className="navlist">
                    <div className="navli">
                        <Link to="/upload">
                           <a> Upload</a>
                        </Link>
                    </div>
                    <div className="navli">
                        <Link to="/result">
                           <a>Your Docs</a>
                        </Link>
                    </div>
                    <div className="navli">
                        <Link to="/login">
                           <a> Login</a>
                        </Link>
                    </div>
                </div>


            </nav>
            <Routes>
                <Route path="/Upload" element={<Upload />} />
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar