const express = require('express');

const userController = require('../controller/users.js');

const router = express.Router();

// Create - Post
router.post('/', userController.createNewUsers);

// Read - Get
router.get('/', userController.getAllUsers);

// Update - Patch
router.patch('/:idUser', userController.updateUsers);

// Delete - DELETE
router.delete('/:idUser', userController.deleteUser);

module.exports = router;
