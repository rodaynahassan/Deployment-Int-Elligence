const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Form = require('../../Models/Form')
const validator = require('../../Validation/formValidations')
const controller = require('../../controllers/formController')


//get all forms
 
router.get('/', async (req,res) => {
    const forms  = await controller.search()
    return res.json({data:forms})
    
})
//get a form by id
router.get('/:id', async (req,res) => {
        const id = req.params.id
        const form = await controller.search('_id',id)
        return res.json({data:form})
        
})

//create a form
router.post('/', async (req,res) => {
    const newForm = await controller.create(req.body)
    return res.json({data:newForm})
    })

//update a form
 router.put('/:id', async (req,res) => {
    try
    {
        const id = req.params.id
        var form = await controller.update('id',id,req.body)
        if(!form) return res.json({msg:"ID not found"})
        if(form.error) return res.status(400).send(form)
        return res.json({msg:"Form Updated Successfully", data:form})
    }
    catch(error)
    {
        console.log(error)
    }
 })

//delete a form
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedForm= await controller.remove('_id',id)
    return res.json({msg:'Form was deleted successfully', data: deletedForm})
    }
    catch(error) {
        console.log(error)
    }  
 })
module.exports = router