const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("servidor ronando")
})

app.listen(5500, () => console.log("server up"))