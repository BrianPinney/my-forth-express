import express from 'express'

const PORT = 3000

const app = express()

app.get('/',(req, res) => {
    res.send ('I am index.')
})

app.get('/makeMeASandwich',(req, res) => {
    res.send ("BOOM, you're a sandwich!")
})

app.listen(PORT,() => {
    console.log(`Listening on port http://localhost:${PORT}`)
})