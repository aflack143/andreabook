const express = require('express');
const router = express.Router();
const ctrl = require("../controllers");

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.signup);
router.get('/profile/:id', ctrl.users.profile);

router.post('/signup', ctrl.users.createUser);



module.exports = router;