const express = require('express')

const router = express.Router()

const storeController = require('../controllers/store')
const checkAuth = require('../middleware/check-auth')

router.get('/', checkAuth, storeController.getStoreData)

module.exports = router
