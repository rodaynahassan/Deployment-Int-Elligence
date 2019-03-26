const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const forms = require('./routes/api/forms')
const admins = require('./routes/api/admins')
const cases=require('./routes/api/cases')


mongoose.set('useCreateIndex', true)

const app = express()
// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose

    .connect('mongodb+srv://ScrumMaster:26312215@int-elligence-s1doh.mongodb.net/local_library?retryWrites=true')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))
    { useNewUrlParser: true }

// Init middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const port =   3000  //process.env.PORT  
=======
const port = 3000
>>>>>>> 84f491c6ed952a5d7e09944c90d3770575072abb
=======
const port = 3000
>>>>>>> 527e4e5b6402b3a35f413ea877dfe9782d66e4cb
=======
const port =   3000
>>>>>>> 265641c4be83fd89df0227254b3c821295a1b0d5
app.listen(port, () => console.log(`Server up and running on port ${port}`))