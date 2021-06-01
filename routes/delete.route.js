const deletee=require('express').Router();
const mongoose=require('mongoose');
const fileModel = require('../model/file.model');
deletee.get('/delete/:id', async (req,res)=>{
   await fileModel.deleteOne({_id:req.params.id});
   res.redirect('/');   
})
module.exports=deletee;
