const express = require('express');

const router = express.Router();

const controller = require('../controllers/flightController');

router.get('/', controller.getUsers);

router.post('/', controller.createUser);

router.get('/:id', controller.getUser);

router.delete('/:id', controller.deleteUser);

router.patch('/:id', controller.updateUser);

module.exports = router;

