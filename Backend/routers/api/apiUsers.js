const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');


//Ver usuarios
router.get('/user', usersAPIController.user);
router.get('/user/:id',usersAPIController.userId);

module.exports = router;