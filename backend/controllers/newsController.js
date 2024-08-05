const axios = require('axios');

// Get news
exports.getNews = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: { country: 'us', apiKey: process.env.NEWS_API_KEY },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
