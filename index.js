const express = require('express')

const investors = require('./routes/api/investors')
const sscForms = require('./routes/api/sscforms')
<<<<<<< HEAD
const admins = require('./routes/api/admins')

=======
const cases=require('./routes/api/cases')
>>>>>>> f4c5926a812cbfe3134f18dac2f4729a68c7fc92

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
})

// Direct routes to appropriate files 
app.use('/routes/api/investors', investors)
app.use('/routes/api/sscforms',sscForms)
<<<<<<< HEAD
app.use('/routes/api/admins',admins)
=======
app.use('/routes/api/cases',cases)
>>>>>>> f4c5926a812cbfe3134f18dac2f4729a68c7fc92

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))