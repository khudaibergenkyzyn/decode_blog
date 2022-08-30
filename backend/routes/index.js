const express = require('express');
const router = express.Router();

router.use(require('./auth'))
router.use(require('./user'))
router.use(require('./category'))
router.use(require('./blogs'))

module.exports = router