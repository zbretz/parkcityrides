const express = require('express');

const dotenv = require('dotenv')
const router = require("express").Router();
const path = require('path');
router.use(express.urlencoded({ extended: true }));
router.use(express.static('public'));

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

router.get('/policies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'policies.html'));
});



module.exports = router;


