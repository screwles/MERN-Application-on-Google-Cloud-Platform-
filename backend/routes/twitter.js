const express = require('express');
const router = express.Router();
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/tweets', async (req, res) => {
  try {
    const params = { q: 'news', count: 10, result_type: 'recent', lang: 'en' };
    const tweets = await client.get('search/tweets', params);
    res.json(tweets.statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
