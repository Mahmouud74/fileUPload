const handle = require('express').Router();
const mongoose=require('mongoose');
const fileModel=require('../model/file.model');
handle.post('/handle', async (req,res)=>{
    //console.log(req.file);
    await fileModel.insertMany({title:req.body.title , file:req.file.path})
    res.redirect('/')
})
module.exports=handle;
