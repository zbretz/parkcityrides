const express = require('express');

const dotenv = require('dotenv')
dotenv.config(); // Load environment variables

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

router.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});

router.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'account.html'));
});

// API endpoint to serve Google Maps API key securely
router.get('/api/google-maps-key', (req, res) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Google Maps API key not configured' });
  }
  res.json({ apiKey: apiKey });
});


/* ****** */

// router.get('/tpca', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'tpca.html'));
// });

// router.get('/ski', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'ski.html'));
// });

// router.get('/driver', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'driver.html'));
// });

// router.get('/profile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'profile.html'));
// });




module.exports = router;


