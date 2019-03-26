// Dependencies
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const validator = require('../../Validation/adminValidations')
const adminController = require('../../controllers/adminController')

// Models
const Admin = require('../../Models/Admin');
const Cases = require('../../Models/Case');

//controller
router.get('/getById/:id',async(req,res) => 
{
    var admin=adminController.search("id",req.params.id)
    return res.json({ data: admin });
})


router.get('/',async(req,res) => 
{
    const admin=adminController.search()
    return res.json({ data: admin });
})
router.post('/', async (req,res) => {
    const newAdmin=await adminController.create(req.body)
    return res.json({ data: newAdmin });
 })

// 

router.get('/CasesSortedById', async(req, res) => {
    var cases= await Cases.find()
    cases.sort(compareById)
    return res.json({ data: cases });
})

router.get('/CasesSortedByCreationDate', async(req, res) => {
    var cases= await Cases.find()
    cases.sort(compare)
    return res.json({ data: cases });
})

//sort cases by ID
function compareById(a,b){
    if(a._id < b._id) return -1
    if(b._id < a._id) return 1
    
    return 0
}

//View the sorted cases by date
function compare(a,b){
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1
    if(Date.parse(a.creationDate)<Date.parse(b.creationDate)) return -1
    return 0
}

module.exports = router;