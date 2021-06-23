import axios from "axios";
import React from "react";
import "./individual_file.css";
import delete_ from './delete.png'

const IndividualFile = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    alert("deleting...");
    const data = {
      image: props.data.image,
      doc_name: props.data.doc_name,
      hos_name: props.data.hos_name,
    };
    const delete_ = async () => {
      await axios
        .post(
          "http://localhost:7000/user_file/delete_file/60cf889a5a23f946cc76fa71/" +
            props.data.doc_name +
            "/" +
            props.data.hos_name,
          data
        )
        .then(() => {
          console.log("sended");
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.reload(false);
    };
    delete_();
  };

  return (
    <React.Fragment>
          <div className="file-by-doc">
            <img src={"/images/" + props.data.image} className="image-file" />
          </div>
          <div className="file-btns">
           <img onClick={handleDelete} className="delete_if__" src={delete_}></img>
          </div>
          <hr></hr>
    </React.Fragment>
  );
};

export default IndividualFile;
