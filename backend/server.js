const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("The server is up and good to go")
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000....`)
})