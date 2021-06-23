import React, { Component } from 'react';
import {NavLink} from  'react-router-dom';
import './fileinfo.css';
import axios from 'axios';
import IndividualFile from '../IndividualFile/individual_file';
import file from './file.png'

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
                    <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}>
                    <img src={file} className="file_"/>
                    </NavLink>
                    <p className="add-file-desc__">Add your first file!</p>
                </div> 
                :
            <React.Fragment>
                
                <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}>
                <img  onClick={this.handleClick} src={file} className="file_fi_"/>
                </NavLink>
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