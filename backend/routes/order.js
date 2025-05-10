const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order');

router.post('/creat-order', OrderController.createOrder);
router.post('/verifyPayment', OrderController.verifyPayment);