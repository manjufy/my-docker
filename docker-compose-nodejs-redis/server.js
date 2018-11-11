const express = require('express')
const redis = require('redis')
const redisClient = redis.createClient(6379, 'redis')

// constants
const PORT = 8080
const HOST = '0.0.0.0'

// app
const app = express()

redisClient.on('connect', () => {
    console.log('Redis client connected!')
})

redisClient.on('error', (error) => {
    console.log('Something went wrong with redis', error)
})

redisClient.set('hits', 10, redis.print)
app.get('/', (req, res) => {
    getHitCount((counter) => {
        res.send(`Hurray!. Docker-Compose Works! And you have refreshed this ${counter} times`)
    })
})

const getHitCount = (callback) => {
    redisClient.incr('hits')
    redisClient.get('hits', function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        }

        console.log('Result', result)
        return  callback(result);
    })
}

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)