import File from "../model_/user_file.js";
import mongoose from "mongoose";

export const getFilesRoot = async (req, res) => {
  const id = req.params;
  try {
    const files = await File.findById("60cf889a5a23f946cc76fa71");
    res.status(200).json(files.folders.filter(folder => folder.parentFolder === "root"));
  } catch (error) {
    res.status(400).json({ message: "Cant get files" });
  }
};

export const getFiles = async (req, res) => {
  const id = req.params;
  const parent_folder = req.params.pid;
  try {
    const files = await File.findById("60cf889a5a23f946cc76fa71");
    res.status(200).json(files.folders.filter(folder => folder.parentFolder === parent_folder));
  } catch (error) {
    res.status(400).json({ message: "Cant get files" });
  }
};

export const removeFile = async (req, res) => {
  const id = req.params.id;
  const fid = req.params.fid;
  const doc_name = req.body.doc_name;
  const hos_name = req.body.hos_name;
  
  try {
    await File.findOneAndUpdate(
      { _id: "60cf889a5a23f946cc76fa71" },
      {
        $pull: {
          content: {
            doc_name: doc_name,
            hos_name: hos_name,
          },
        },
      }
    );
    console.log('l1 pics deleted')

    let user = await File.find({_id : "60cf889a5a23f946cc76fa71"});
    let allFolder = user[0].folders;
    let parent = await allFolder.filter((item) => item._id == fid)
    let children = await allFolder.filter(item => item.parentFolder == fid);
     
    if(children.length > 0){
      for(let i=0;i<children.length;i++){
         await File.findOneAndUpdate(
          { _id: "60cf889a5a23f946cc76fa71" },
          {
            $pull: {
              content: {
                doc_name: children[i].doc_name,
                hos_name: children[i].hos_name,
              },
            },
          }
        );
        console.log('l1 pics deleted') 
      }
    }
        
    await File.findOneAndUpdate({_id : "60cf889a5a23f946cc76fa71"},{
      $pull : {
        folders : {
          parentFolder : parent[0]._id,
        }
      }
    });
    console.log('l1 folders deleted')


    await File.findOneAndUpdate(
      { _id: "60cf889a5a23f946cc76fa71" },
      {
        $pull: {
          folders: {
            _id : parent[0]._id,
          },
        },
      }
    );
    console.log('root deleted')

    res.status(200).json({ message: "updated folders successfully" });
  } catch (error) {
    res.status(400).json({ message: "Cant update folders" });
  }
};

export const postFolder = async (req, res) => {
  const id = req.params;
  const doc_name = req.body.doc_name;
  const hos_name = req.body.hos_name;
  const parent_folder = req.body.parent_folder;
  try {
    await File.findOneAndUpdate(
      { _id: "60cf889a5a23f946cc76fa71" },
      {
        $addToSet: {
          folders: {
            parentFolder: parent_folder,
            doc_name: doc_name,
            hos_name: hos_name,
          },
        },
      }
    );
    res.status(200).json({ message: "added new folder successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFileByDocAndHos = async (req, res) => {
  try {
    const data = await File.findById("60cf889a5a23f946cc76fa71");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "cant get files" });
  }
};

export const addFile = async (req, res) => {
  const id = req.params;
  const image = req.body.image;
  const doc_name = req.body.doc_name;
  const hos_name = req.body.hos_name;
  try {
    await File.findOneAndUpdate(
      { _id: "60cf889a5a23f946cc76fa71" },
      {
        $addToSet: {
          content: {
            image: image,
            doc_name: doc_name,
            hos_name: hos_name,
          },
        },
      }
    );
    res.status(200).json({ message: "added new file successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const delete_file = async (req, res) => {
  const id = req.params;
  const image = req.body.image;
  const doc_name = req.body.doc_name;
  const hos_name = req.body.hos_name;
  try {
    await File.findOneAndUpdate(
      { _id: "60cf889a5a23f946cc76fa71" },
      {
        $pull: {
          content: {
            image: image,
            doc_name: doc_name,
            hos_name: hos_name,
          },
        },
      }
    );
    res.status(200).json({ message: "removed file successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
