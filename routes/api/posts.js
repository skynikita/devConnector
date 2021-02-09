const express = require('express');
const router = express.Router();

// @ROUTE   GET api/posts
// @desc    TEST route
// @access  Public
router.get('/',(req,res) => res.send('Posts route'));

module.exports = router;
