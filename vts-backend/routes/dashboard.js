const express = require('express')

const router = express.Router()

const dashboardController = require('../controllers/dashboard')
const checkAuth = require('../middleware/check-auth')
const adminAccess = require('../middleware/admin-access')

router.get('/', checkAuth, adminAccess, dashboardController.getDashboardData)

module.exports = router
