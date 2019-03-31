// Dependencies
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const validator = require('../../Validation/adminValidations')
const adminController = require('../../controllers/adminController')

// Models
const Admin = require('../../Models/Admin');
const Forms = require('../../Models/Form');


//get by ID
router.get('/getById/:id',async(req,res) => 
{
    var admin=await adminController.search("id",req.params.id)
    return res.json({ data: admin });
})


// get all admins
router.get('/',async(req,res) => 
{
    const admin=await adminController.search()
    return res.json({ data: admin });
})

//create admin
router.post('/', async (req,res) => {
    const newAdmin=await adminController.create(req.body)
    return res.json({ data: newAdmin });
 })


// sort cases by id
router.get('/CasesSortedById', async(req, res) => {
    var forms= await Forms.find()
    forms.sort(adminController.compareById)
    return res.json({ data: forms });
})
// sort cases by creation date
router.get('/CasesSortedByCreationDate', async(req, res) => {
    var forms= await Forms.find()
    forms.sort(adminController.compare)
    return res.json({ data: forms });
})
// update an admin
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     var admin = await adminController.update('id',id,req.body)
     if(!admin) return res.json({msg:'ID not there'})
     if(admin.error) return res.status(400).send(admin)
     return res.json({msg: 'Admin updated successfully',data:admin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//delete an admin
router.delete('/:id', async (req, res) => {
	try{
    const adminId = req.params.id 
    const deletedAdmin = await adminController.remove('id',adminId)
    if(!deletedAdmin)  return res.json({msg:'ID not there'})
	return res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
	}
	catch(error){
		console.log(error)
	}
})

router.post('/register', async (req,res) => {                       //register lawyer or reviewer
    const newUser = await adminController.registerLawyerOrReviewer(req.body) 
    if(newUser.error) return res.status(400).send(newUser) 
     return res.json({msg:'Account was created successfully', data: newUser})

    })






module.exports = router;