import File from '../model_/user_file.js';
import mongoose from 'mongoose';

export const getFiles = async(req,res) => {
    const id = req.params;
    try{
        const files = await File.findById("6077cfa8d03b171384837771");
        res.status(200).json(files.folders);
    }
    catch(error){
        res.status(400).json({message : "Cant get files"});
    }
}

export const removeFile = async(req,res) => {
    const id = req.params;
    const doc_name = req.body.doc_name;
    const hos_name = req.body.hos_name;
    try{
        await File.findOneAndUpdate(
            { _id: "6077cfa8d03b171384837771" }, 
            { $pull: { 
                      content: {
                        "doc_name" : doc_name,
                        "hos_name" : hos_name
                        }  
                    } 
            })
        res.status(200).json({message : "removed file successfully"});

        await File.findOneAndUpdate(
            { _id: "6077cfa8d03b171384837771" }, 
            { $pull: { 
                      folders: {
                        "doc_name" : doc_name,
                        "hos_name" : hos_name
                        }  
                    } 
            })
        res.status(200).json({message : "updated folders successfully"});
    }
    catch(error){
        res.status(400).json({message:"Cant update folders"});
    }
}

export const postFolder = async (req,res) => {
    const id = req.params;
    const doc_name = req.body.doc_name;
    const hos_name = req.body.hos_name;
        try{
            await File.findOneAndUpdate(
                { _id: "6077cfa8d03b171384837771" }, 
                { $addToSet: { 
                          folders: {
                            "doc_name" : doc_name,
                            "hos_name" : hos_name
                            }  
                        } 
                })
            res.status(200).json({message : "added new folder successfully"});
        }
        catch(error){
            res.status(400).json({message:error.message});
        }
}

export const getFileByDocAndHos = async (req,res) => {
    
    try{
        const data = await File.findById("6077cfa8d03b171384837771");
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({message:"cant get files"});
    }

}

export const addFile = async (req,res) => {
    const id = req.params;
    const image = req.body.image;
    const doc_name = req.body.doc_name;
    const hos_name = req.body.hos_name;
    try{
        await File.findOneAndUpdate(
            { _id: "6077cfa8d03b171384837771" }, 
            { $addToSet: { 
                      content: {
                        "image"    : image,
                        "doc_name" : doc_name,
                        "hos_name" : hos_name
                        }  
                    } 
            })
        res.status(200).json({message : "added new file successfully"});
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

export const delete_file = async (req,res) => {
    const id = req.params;
    const image = req.body.image;
    const doc_name = req.body.doc_name;
    const hos_name = req.body.hos_name;
    console.log(doc_name);
    console.log(hos_name);
    try{
        await File.findOneAndUpdate(
            { _id: "6077cfa8d03b171384837771" }, 
            { $pull: { 
                      content: {
                        "image"    : image,
                        "doc_name" : doc_name,
                        "hos_name" : hos_name
                        }  
                    } 
            })
        res.status(200).json({message : "removed file successfully"});
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}