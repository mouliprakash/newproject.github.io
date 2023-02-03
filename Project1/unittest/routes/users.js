const express = require('express');
const router = express.Router();
const userctrl = require('../controller/userctrl');
router.get('/',userctrl.userlist);

module.exports = router;
