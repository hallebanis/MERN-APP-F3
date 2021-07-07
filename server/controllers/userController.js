const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')

const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { firstname, lastname, password, email } = req.body
        const user = await User.findOne({ email })
        if (user)
            return res.status(400).json({ errors: [{ msg: 'User exist !' }] })
        const newUser = new User({
            firstname,
            lastname,
            password,
            email
        })
        //cryptage du password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt)
        newUser.password = hash

        const registredUser = await newUser.save()
        const payload = {
            sub: registredUser._id
        }
        const token = await jwt.sign(payload, config.get("JWT_CONFIG.SECRET"))
        res.json({ token })

    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}

const login = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.mapped() })
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return res.status(404).json({ errors: [{ msg: 'please register before' }] })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.status(404).json({ errors: [{ msg: 'wrong password' }] })
        const payload = {
            sub: user._id
        }
        const token = await jwt.sign(payload, config.get("JWT_CONFIG.SECRET"))
        res.json({ token })

    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select({ password: 0, _v: 0 })
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}


module.exports = { register, login, getUserProfile }