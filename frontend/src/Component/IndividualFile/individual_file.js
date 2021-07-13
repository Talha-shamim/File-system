import axios from "axios";
import React, {useState} from "react";
import "./individual_file.css";
import delete_ from './delete.png'
import Cropper from 'cropperjs';
import info__ from './info.png'
import picture from './pictures.png'
import cancel from './cancel.png'
import "cropperjs/dist/cropper.min.css";

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

  const [info,setInfo] = useState(true);

  const handleInfo = () => {
    setInfo(!info)
  }

  const [image,setImg] = useState(true);

  const handleImg = () => {
    setImg(!image)
  }

  // const image = document.getElementById('image__');
  // const cropper = new Cropper(image, {
  //   aspectRatio: 16 / 9,
  //   crop(event) {
  //     console.log(event.detail.x);
  //     console.log(event.detail.y);
  //     console.log(event.detail.width);
  //     console.log(event.detail.height);
  //     console.log(event.detail.rotate);
  //     console.log(event.detail.scaleX);
  //     console.log(event.detail.scaleY);
  //   },
  // });
  

  return (
    <React.Fragment>
        <div className="individual-file">
          <div className="file-by-doc" id="image__">
            {!image === true ? 
              <div>
                <img src={"/images/" + props.data.image} className="image-file" />
                <img src={cancel} className="cancel"  onClick={handleImg} />
              </div>
            
            :
            <img src={picture} className="picture" onClick={handleImg}  /> }
          </div>
          <div className="file_btns">
            {!info===true ? <p onClick={handleDelete} className="delete_if__">delete</p> : '' }
            </div>
            <img src={info__} onClick={handleInfo} className="info__if"/>
        </div>
        <hr></hr>
    </React.Fragment>
  );
};

export default IndividualFile;
