const express = require('express')

const users = require('./routes/api/users')
const forms = require('./routes/api/forms')
const admins = require('./routes/api/admins')
const cases=require('./routes/api/cases')


// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
})

// Direct routes to appropriate files 
app.use('/routes/api/users', users)
app.use('/routes/api/forms',forms)
app.use('/routes/api/admins',admins)
app.use('/routes/api/cases',cases)




// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))