const handle = require('express').Router();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/fileUpload',{useNewUrlParser:true,useUnifiedTopology:true});
const fileModel=require('../model/file.model');
handle.post('/handle', async (req,res)=>{
    //console.log(req.file);
    await fileModel.insertMany({title:req.body.title , file:req.file.path})
    res.redirect('/')
})
module.exports=handle;
