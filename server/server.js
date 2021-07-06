const express = require('express')
const dbConnect = require('./helpers/dbConnect')
const config = require('config')
const app = express()

const PORT = config.get('SERVER_CONFIG.PORT') || 5000
dbConnect()

//middlewares
app.use(express.json())
app.use('/api/user', require('./routes/userRoutes'))


app.listen(5000, () => {
    console.log(`Application is running on http://localhost:${PORT}`)
})