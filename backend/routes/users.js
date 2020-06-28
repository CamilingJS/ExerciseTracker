const router = require('express').Router();

//Declaring & importing user model
let User = require('../models/user.model');

//route to find user // the find method returns a promise 
router.route('/').get( (req, res) => {
    User.find()
    .then( users => res.json(users))
    .catch( err => res.status(400).json(`Error: `+ err));
});

//route to add a new username
router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const newUser = new User({username});

    newUser.save()
    .then(()=> res.json('User added!'))
    .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router; 