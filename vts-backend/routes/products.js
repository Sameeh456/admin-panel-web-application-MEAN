const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')
const checkAuth = require('../middleware/check-auth')
const managerAccess = require('../middleware/manager-access')

router.get('/', checkAuth, managerAccess, productsController.getProductsData)

module.exports = router
