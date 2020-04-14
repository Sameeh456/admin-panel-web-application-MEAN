const express = require('express')

const router = express.Router()

const salesController = require('../controllers/sales')
const checkAuth = require('../middleware/check-auth')

router.get('/', checkAuth, salesController.getSalesData)

module.exports = router
