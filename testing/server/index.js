const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())

app.use('/test', require('./solv-test-requests/router'))

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})