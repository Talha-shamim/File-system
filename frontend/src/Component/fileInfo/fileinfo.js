import React, { Component } from 'react';
import {NavLink} from  'react-router-dom';
import './fileinfo.css';
import axios from 'axios';
import IndividualFile from '../IndividualFile/individual_file';

class FileInfo extends Component {
    state = { 
        hospital : this.props.match.params.h,
        name : this.props.match.params.d,
        file : [],
    }

    handleClick = () => {

    }

    componentDidMount() {
        const fetchFile = async () => {
            const getFileByDocAndHos = await axios.get('http://localhost:7000/user_file/fileByDH/' + this.state.name + '/' + this.state.hospital);
            this.setState({file : getFileByDocAndHos.data.content});
            this.setState({file : this.state.file.filter(item => item.doc_name === this.state.name && item.hos_name === this.state.hospital)});
            console.log(this.state.file);
        }
        fetchFile();
    }

    render() { 
        return ( 
            <div>
            {
                this.state.file.length === 0 ? <div>
                    <NavLink to="/LandingPage"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left-circle-fill back-icon-fileinfo-empty" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg></NavLink> 
                    <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-file-earmark-plus add-file-to-folder-empty" viewBox="0 0 16 16" onClick={this.handleClick}>
                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                    </svg></NavLink>
                    <p className="add-file-desc">Add your first file!</p>
                </div> 
                :
            <React.Fragment>
                <NavLink to="/LandingPage"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle-fill back-icon-fileinfo" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg></NavLink> 
                <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-earmark-plus add-file-to-folder" viewBox="0 0 16 16" onClick={this.handleClick}>
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                </svg></NavLink>
                <h3 className="file-head">Files by {this.state.name} from {this.state.hospital}</h3>
                {
                    this.state.file.map(item => {
                        return <IndividualFile data={item}/>
                    }   
                )}
                </React.Fragment>
            }
            </div>
         );
    }
}
 
export default FileInfo;