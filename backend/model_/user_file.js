import mongoose from 'mongoose';

const FileSchema = mongoose.Schema({
    name : String,
    folders:[
        {
            doc_name:String,
            hos_name:String
        }
    ],
    content:[
        {   
            image:String,
            doc_name:String,
            hos_name:String
        }
    ]
})

const File = mongoose.model('File',FileSchema);

export default File;