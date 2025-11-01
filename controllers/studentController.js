const Student=require('../models/student');

exports.getAllStudents=async(req,res)=>
{
    const students=await Student.find();
    res.render('index',{students});
}

exports.addStudentForm=(req,res)=>
{
    res.render('add')
}

exports.addStudent=async(req,res)=>
{
    const{name,email,age}=req.body;
    await Student.create({name,email,age});
    res.redirect('/')
}

exports.editStudentForm=async(req,res)=>
{
    const student=await Student.findById(req.params.id);
    res.render('edit',{student});
}

exports.updateStudent=async(req,res)=>
{
    const{name,email,age}=req.body;
    await Student.findByIdAndUpdate(req.params.id,{name,email,age});
    res.redirect('/');
}
exports.deleteStudent=async(req,res)=>
{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/')
}