const express = require('express');
const pool = require('../modules/pool');
const dotenv = require('dotenv');
const axios = require('axios');
const router = express.Router();
const giphykey = 'KktrbnUPsAJT6lmiJv5vmiHhHXhYYrkQ';


router.post('/search', (req, res) => {

    const searchString = req.body.searchString;
    const rating = req.body.rating;
    const gifLimit = req.body.gifLimit;

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphykey}&q=${searchString}&rating=${rating}&limit=${gifLimit}`)
        .then((response) => {
            res.send(response.data)
        }).catch((error) => {
            console.error(`Error making giphy request`, error);
            res.sendStatus(500);
        })
})

module.exports = router;
