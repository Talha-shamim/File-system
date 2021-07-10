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
                this.state.file.length === 0 ? <div className="empty_fi__">
                <p className="add-file-desc__">Add your first file!</p>
                <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}>
                <img src={file} className="file_"/>
                </NavLink>
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