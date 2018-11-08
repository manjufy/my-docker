const express = require('express')

// constants
const PORT = 8000
const HOST = 'localhost'

// app
const app = express()
app.get('/', (req, res) => {
    res.send('Hurray!. Docker-Compose Works')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)