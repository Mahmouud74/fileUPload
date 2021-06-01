const express=require('express');
const path=require('path');
const home = require('./routes/home.route');
const handle=require('./routes/handle')
const deletee=require('./routes/delete.route')
const edit=require('./routes/edit.route')
const handleEdit = require('./routes/handleEdit');
const app=express();
const multer = require('multer');
const port=3000;
const mongoose= require('mongoose');
app.use(express.urlencoded({extended:true}));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'xyz')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname  )
    }
  })
app.use(multer({dest:'xyz', storage }).single('filee'))
app.use(express.static(path.join(__dirname,'public')));
app.use('/xyz',express.static(path.join(__dirname,'xyz')));
app.set('view engine','ejs');
app.use(handle)
app.use(home)
app.use(deletee)
app.use(edit)
app.use(handleEdit)
mongoose.connect('mongodb+srv://admin:admin@cluster0.vk4zz.mongodb.net/fileUpload',{useNewUrlParser:true,useUnifiedTopology:true});
const fileModel=require('./model/file.model');
app.listen(process.env.PORT || port,()=>{
    
    console.log('File Upload');
})
