import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './file.css';


const File = (props) => {

    const handleDelete = (doc,hos) => {
        alert('Folder will be deleted');
        const data = {
            doc_name : props.info.doc_name,
            hos_name : props.info.hos_name
        }
        axios.post('http://localhost:7000/user_file/update_file/6077cfa8d03b171384837771', data);
        window.location.reload(false);
    }

    return ( 
        <div className="col">
            <NavLink to={`/fileInfo/${props.info.hos_name}/${props.info.doc_name}`}className="file-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="200" fill="currentColor" class="bi bi-file-earmark-diff-fill file-icon" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8 6a.5.5 0 0 1 .5.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5A.5.5 0 0 1 8 6zm-2.5 6.5A.5.5 0 0 1 6 12h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
            </svg></NavLink>
            <div className="delete-btn" onClick={() => handleDelete(props.info.doc_name,props.info.hos_name)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-folder-x" viewBox="0 0 16 16">
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
            <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293l-1.146-1.147z"/>
            </svg></div>
            <div className="file-desc">
                {props.info.doc_name} 
                <br />
                ({props.info.hos_name})
                <hr></hr>
            </div>
        </div>
     );
}
 
export default File;