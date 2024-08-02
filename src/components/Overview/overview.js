import React from 'react';
import './Overview.css';

const Task = ({ task }) => (
    <div className="task">
        <input type="checkbox" id={task.id} />
        <label htmlFor={task.id}>{task.title}</label>
        <span className={task.status.toLowerCase()}>{task.status}</span>
    </div>
);

const Overview = () => {
    const tasks = [
        { id: 1, title: 'Finish ticket update', status: 'URGENT' },
        { id: 2, title: 'Create new ticket example', status: 'NEW' },
        { id: 3, title: 'Update ticket report', status: 'DEFAULT' }
    ];

    return (
        <div className="overview">
            <div className="stats">
                <div className="stat">
                    <div className="statNumber">60</div>
                    <div className="statLabel">Unresolved</div>
                </div>
                <div className="stat">
                    <div className="statNumber">16</div>
                    <div className="statLabel">Overdue</div>
                </div>
                <div className="stat">
                    <div className="statNumber">43</div>
                    <div className="statLabel">Open</div>
                </div>
                <div className="stat">
                    <div className="statNumber">64</div>
                    <div className="statLabel">On hold</div>
                </div>
            </div>
            <div className="trends">
                <h3>Today's trends</h3>
                <div className="chart">
                    {/* Placeholder for chart */}
                </div>
            </div>
            <div className="details">
                <div className="unresolvedTickets">
                    <h3>Unresolved tickets</h3>
                    <ul>
                        <li>Waiting on Feature Request <span>4238</span></li>
                        <li>Awaiting Customer Response <span>1005</span></li>
                        <li>Awaiting Developer Fix <span>914</span></li>
                        <li>Pending <span>281</span></li>
                    </ul>
                </div>
                <div className="tasks">
                    <div className="task-header">
                        <h3>Tasks</h3>
                        <a href="#">View all</a>
                    </div>
                    <input type="text" placeholder="Create new task" />
                    {tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
