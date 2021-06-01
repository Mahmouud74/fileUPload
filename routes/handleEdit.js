const handleEdit = require('express').Router()
const mongoose=require('mongoose');
const fileModel = require('../model/file.model');
mongoose.connect('mongodb://localhost:27017/fileUpload',{useNewUrlParser:true,useUnifiedTopology:true});
handleEdit.post('/handleedit/:id',async (req,res)=>{
    await fileModel.updateOne({_id:req.params.id},{ $set: { title:req.body.title , file:req.file.path }})
    res.redirect('/');
})
module.exports=handleEdit;