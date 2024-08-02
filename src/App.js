import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import Overview from './components/Overview/overview';
import Login from './components/Auth/Login';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={
                        <div className="mainContent">
                            <div className="sidebar"><Sidebar /></div>
                            <div className="contentContainer">
                                <Header />
                                <Overview />
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
