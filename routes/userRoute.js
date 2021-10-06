const express = require('express');
const { registerUser, loginUser, users, userSearch, usersSelection } = require('../controller/userController');

const router = express.Router();

router.route('/').get((req,res)=>{
    res.send('welcome')
})

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/users').get(users)

router.route('/users/name/:name').get(userSearch)

router.route('/users/email/:email').get(userSearch)

router.route('/users/email').get(usersSelection)

module.exports = router