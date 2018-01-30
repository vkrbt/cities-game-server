'use strict';

const express = require('express');
const os = require('os');

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
    res.json({ city: cities[randPosInArray(cities.length)] });
  } else {
    res.status(400).json({ error: 'Wrong query!' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on ${port} port`)
});
