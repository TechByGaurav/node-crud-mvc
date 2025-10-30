const express=require('express');
const studentController=require('../controllers/studentController');
const router=express.Router();

router.get('/',studentController.getAllStudents);
router.get('/add',studentController.addStudentForm);
router.post('/add',studentController.addStudent);
router.get('/edit/:id',studentController.editStudentForm);
router.post('/edit/:id',studentController.updateStudent);
router.get('/delete/:id',studentController.deleteStudent);

module.exports=router;
// module.exports={router};