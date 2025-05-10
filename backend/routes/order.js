const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order');

router.post('/create-order', OrderController.createOrder);  // fixed typo
router.post('/verify-payment', OrderController.verifyPayment);

module.exports = router;
