const express = require('express')

const investors = require('./routes/api/investors')
const sscForms = require('./routes/api/sscforms')

const spcForms = require('./routes/api/spcforms')

const companies=require('./routes/api/companies')

const lawyers = require('./routes/api/lawyers')


const admins = require('./routes/api/admins')



const cases=require('./routes/api/cases')



const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`);
})

// Direct routes to appropriate files 
app.use('/routes/api/investors', investors)
app.use('/routes/api/sscforms',sscForms)

app.use('/routes/api/spcforms',spcForms)
app.use('/routes/api/companies',companies)

app.use('/routes/api/lawyers',lawyers)


app.use('/routes/api/admins',admins)

app.use('/routes/api/cases',cases)




// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))