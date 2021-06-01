const edit= require('express').Router()
const mongoose=require('mongoose');
const fileModel = require('../model/file.model');
edit.get('/edit/:id',async (req,res)=>{
    let result = await fileModel.find({_id: req.params.id});
    //console.log(result);
    res.render('edit.ejs',{result});
})
module.exports=edit;
