const home = require('express').Router()
const mongoose =require('mongoose');
const fileModel = require('../model/file.model');
mongoose.connect('mongodb://localhost:27017/fileUpload',{useNewUrlParser:true , useUnifiedTopology:true})
home.get('/',async(req,res)=>{
    let result = await fileModel.find()
    res.render('home.ejs',{result});
})
module.exports=home;