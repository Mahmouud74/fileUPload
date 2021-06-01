const home = require('express').Router()
const mongoose =require('mongoose');
const fileModel = require('../model/file.model');
home.get('/',async(req,res)=>{
    let result = await fileModel.find()
    res.render('home.ejs',{result});
})
module.exports=home;
