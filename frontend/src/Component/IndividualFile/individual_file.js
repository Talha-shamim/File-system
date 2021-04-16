import axios from 'axios';
import React from 'react';
import './individual_file.css';

const IndividualFile = (props) => {
    
    const handleDelete = (e) => {
        e.preventDefault();
        alert('deleting...')
        const data = {
            image : props.data.image,
            doc_name : props.data.doc_name,
            hos_name : props.data.hos_name
        }
        const delete_ = async () => {
            await axios.post("http://localhost:7000/user_file/delete_file/6077cfa8d03b171384837771/" + props.data.doc_name + '/' + props.data.hos_name, data).then(() => {
                console.log('sended');
            }).catch((err) => {
                console.log(err);
            })
            window.location.reload(false);
        }
        delete_();
    }

    return ( 
        <React.Fragment>
            <div className="conntainer-fluid">
                <div className="row row-cols-1">
                    <div className="file-by-doc cols">
                        <img src={'/images/' + props.data.image} className="image-file" />
                    </div> 
                    <div className="cols file-btns">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-file-earmark-minus" viewBox="0 0 16 16" onClick={handleDelete}>
                        <path d="M5.5 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                        </svg>
                    </div> 
                    <hr></hr>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default IndividualFile;