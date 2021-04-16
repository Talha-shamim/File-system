import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import File from './model_/user_file.js';

import allRoutes from './router/router.js';

const app = express();
app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(cors());


const CONNECTION_URL = "mongodb://localhost/file_system";
const PORT = 7000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true } )
.then( () => app.listen( PORT, () => console.log(`Connection Established With MongoDB on port ${PORT}` ) ) )
.catch( (error) => console.log(error.message) );

const newData = {
    name:"Shubham",
    folders : {
        doc_name : "bcd",
        hos_name : "123"
    },
    content : [],   
}

const addData = async () => {
    await new File(newData).save();
}

// addData();44r5


import multer from 'multer';


const fileStorageEngine = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'../frontend/public/images');
    },
    filename : (req,file,cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine});


app.post('/single/:d/:h', upload.single('image'), async (req,res) => {
    console.log(req.file);
    const id = req.params;
    const doc_name = req.params.d;
    const hos_name = req.params.h;
    console.log(doc_name);
    console.log(hos_name);
    try{
        await File.findOneAndUpdate(
            { _id: "6077cfa8d03b171384837771" }, 
            { $addToSet: { 
                      content: {
                        "image" : req.file.filename,
                        "doc_name" : doc_name,
                        "hos_name" : hos_name
                        }  
                    } 
            })
        res.status(200).json({messsage:"File uploaded Successfully"});
    }
    catch (error){
        res.status(400).json({message : "Cant upload file"});
    }

})

app.post('/uploadFile', upload.single('pdf'), (req,res) => {

})

app.use('/user_file', allRoutes);

mongoose.set('useFindAndModify', false);