const mongoose = require('mongoose')
const moment = require('moment-timezone')
//const Schema= mongoose.Schema

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

module.exports = mongoose.model('user', userSchema)