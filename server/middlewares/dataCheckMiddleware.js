const { body } = require('express-validator')

exports.validationCheck = [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'password should be at least 6 caracters').isLength({ min: 6 })
]

