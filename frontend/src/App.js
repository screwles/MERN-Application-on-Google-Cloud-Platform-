import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('http://localhost:5000/api/news');
            setNews(response.data);
        };
        fetchNews();
    }, []);

    return (
        <Router>
            <div>
                <h1>News App</h1>
                <ul>
                    {news.map((item) => (
                        <li key={item._id}>
                            <h2>{item.title}</h2>
                            <img src={item.imageUrl} alt={item.title} />
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Router>
    );
};

export default App;
