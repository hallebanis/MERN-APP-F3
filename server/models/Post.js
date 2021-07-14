const mongoose = require('mongoose')
const moment = require('moment-timezone')

const postSchema = mongoose.Schema({
    description: String,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    isValidate: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: moment(Date.now()).tz('Europe/Paris').format('LLLL')
    },
    image: {
        type: mongoose.Schema.Types.Mixed
    }
})

module.exports = mongoose.model('post', postSchema)