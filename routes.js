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

router.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});

router.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'account.html'));
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


