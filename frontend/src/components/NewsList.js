import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
