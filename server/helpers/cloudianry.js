const config = require('config')

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: config.get("CLOUDINARY_CONFIG.CLOUD_NAME"),
    api_key: config.get("CLOUDINARY_CONFIG.API_KEY"),
    api_secret: config.get("CLOUDINARY_CONFIG.API_SECRET")

})

module.exports = cloudinary