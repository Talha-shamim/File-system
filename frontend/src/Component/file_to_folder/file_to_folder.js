import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './file_to_folder.css';

class NewFile extends Component {
    constructor(props){
        super(props)
        this.state = { 
            pdf : '',
            name : this.props.match.params.d,
            hospital : this.props.match.params.h,
         }
    }

    handleSubmitFile = (e) => {
        e.preventDefault();
        alert('file adding')

        const data = new FormData();

        data.append('image', this.state.pdf);

        fetch("http://localhost:7000/single" + '/' + this.state.name + '/' +this.state.hospital, {
            method : "POST",
            body : data
        }).then((result) => {
            console.log("File added");
        }).catch((error) => {
            console.log(error.message);
        })

        this.state.pdf = '';
    }

    onChange = (e) => {
       this.state.pdf = e.target.files[0];
    }

    render() { 
        return ( 
            <React.Fragment>
            <NavLink to="/landingpage"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill back-icon-file-to-folder" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg></NavLink> 
            <form onSubmit={this.handleSubmitFile} action="/uploadFile" enctype="multipart/form-data"  method="POST" className="col-md-12 form-file-to-folder">
                <input type="file" className="col-md-12" name="pdf" onChange= {this.onChange} />
                <p className="desc-file">Adding to Folder of {this.state.name} of {this.state.hospital}</p>
                <button className="btn btn-primary col-md-12" type="submit">Add to Folder</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default NewFile;