import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <input type="text" placeholder="Search..." className="searchBox" />
            <div className="profile">
                <div className="notificationIcon">🔔</div>
                <div className="profileIcon">
                    <img src="profile.jpg" alt="Profile" />
                    Jones Ferdinand
                </div>
            </div>
        </div>
    );
};

export default Header;
