import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/twitter/tweets');
        setTweets(response.data);
      } catch (error) {
        console.error('Error fetching the tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="App">
      <h1>Latest Tweets</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index} className="tweet">
            <h2>{tweet.user.name}</h2>
            <img src={tweet.user.profile_image_url} alt={tweet.user.name} />
            <p>{tweet.text}</p>
            <p><strong>Posted at:</strong> {new Date(tweet.created_at).toLocaleString()}</p>
            <a href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`} target="_blank" rel="noopener noreferrer">View on Twitter</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
