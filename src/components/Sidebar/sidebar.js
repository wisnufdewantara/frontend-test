import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">Dashboard Kit</div>
            <nav>
                <ul>
                    <li className="active">Overview</li>
                    <li>Tickets</li>
                    <li>Ideas</li>
                    <li>Contacts</li>
                    <li>Agents</li>
                    <li>Articles</li>
                    <li>Settings</li>
                    <li>Subscription</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
