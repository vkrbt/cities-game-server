'use strict';

const express = require('express');

const letters = require('./letters');

const app = express();

const randPosInArray = length => Math.floor(Math.random() * length);

app.get('/', (req, res) => {
  res.json({
    name: 'vkrbt',
  })
})

app.get('/get-city/:letter', (req, res) => {
  const letter = req.params.letter.toLowerCase();
  const cities = letters[letter];
  if (cities && cities.length) {
    res.json({city: cities[randPosInArray(cities.length)]});
  } else {
    res.status(400).json({error: 'Wrong query!'});
  }
});

app.listen(3000);
