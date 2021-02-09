const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @ROUTE   GET api/auth
// @desc    TEST route
// @access  Public
router.get('/',auth,
    (req,res) =>
        res.send('Auth route')

);

module.exports = router;
