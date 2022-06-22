const express = require('express');
const router = express.Router();



// PATH FOLDER
// USER
const user = require('./user');
router.use(`/user`, user);



module.exports = router;