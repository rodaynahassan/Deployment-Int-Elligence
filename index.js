const express = require('express')

const investors = require('./routes/api/investors')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
})

// Direct routes to appropriate files 
app.use('/routes/api/investors', investors)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))