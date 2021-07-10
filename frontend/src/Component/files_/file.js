import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./file.css";
import folder from './folder.png'
import delete_ from './delete.png'


const File = (props) => {
  const handleDelete = (doc, hos) => {
    alert("Folder will be deleted");
    const data = {
      doc_name: props.info.doc_name,
      hos_name: props.info.hos_name,
    };
    axios.post(
      "http://localhost:7000/user_file/update_file/60cf889a5a23f946cc76fa71/" + props.info._id,
      data
    );
    window.location.reload(false);
  };

  return (
    <div className="col">
      <NavLink
        to={`/fileInfo_/${props.info.hos_name}/${props.info.doc_name}/${props.info._id}`}
        className="file-wrap"
      >
      <img src={folder} className="img-folder" />
      </NavLink>
      <div
        className="delete-btn"
        onClick={() => handleDelete(props.info.doc_name, props.info.hos_name)}
      >
        <img src={delete_}  className="delete_" />
      </div>
      <div className="file-desc">
        {props.info.doc_name}
        <br />({props.info.hos_name})<hr></hr>
      </div>
    </div>
  );
};

export default File;
