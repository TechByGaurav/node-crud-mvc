const student=require('../models/student');

exports.getAllStudents=async(req,res)=>
{
    const students=await student.find();
    res.render('index',{students});
}

exports.addStudentForm=(req,res)=>
{
    res.render('add')
}

exports.addStudent=async(req,res)=>
{
    const{name,email,age}=req.body;
    await student.create({name,email,age});
    res.redirect('/')
}

exports.editStudentForm=async(req,res)=>
{
    const student=await student.findById(req.params.id);
    res.render('edit',{student});
}

exports.updateStudent=async(req,res)=>
{
    const{name,email,age}=req.body;
    await student.findByIdAndUpdate(req.params.id,{name,email,age});
    res.redirect('/');
}
exports.deleteStudent=async(req,res)=>
{
    await student.findByIdAndUpdate(req.params.id);
}