import React, { Component } from 'react';
import {NavLink} from  'react-router-dom';
import './fileinfo.css';
import axios from 'axios';
import IndividualFile from '../IndividualFile/individual_file';
import File from '../files_/file';
import file from './file.png'
import folder from './folder.png'
import add from './add.png'
import cross from './cross.png'

class FileInfo extends Component {
    state = { 
        hospital : this.props.match.params.h,
        name : this.props.match.params.d,
        file : [],
        folders : [],
        addAll : true,
        filefolder : false,
        allcontent : true,
    }

    handleClick = () => {

    }

    handleAdd = () => {
       let addAll = this.state.addAll;
       addAll = !addAll;
       this.setState({addAll})
       let filefolder = this.state.filefolder;
       filefolder = !filefolder;
       this.setState({filefolder});
       let allcontent = this.state.allcontent;
       allcontent = !allcontent;
       this.setState({allcontent});
    }

    handleClose = () => {
       let allcontent = this.state.allcontent;
       allcontent = !allcontent;
       this.setState({allcontent});
       let filefolder = this.state.filefolder;
       filefolder = !filefolder;
       this.setState({filefolder});
       let addAll = this.state.addAll;
       addAll = !addAll;
       this.setState({addAll})
    }

    componentDidMount() {
        let addAll = this.state.addAll;
        addAll = true;
        this.setState({addAll})
        let filefolder = this.state.filefolder;
        filefolder = false;
        this.setState({filefolder});
        
        const fetchFile = async () => {
            const getFileByDocAndHos = await axios.get('http://localhost:7000/user_file/fileByDH/' + this.state.name + '/' + this.state.hospital);
            this.setState({file : getFileByDocAndHos.data.content});
            this.setState({file : this.state.file.filter(item => item.doc_name === this.state.name && item.hos_name === this.state.hospital)});
        }
        fetchFile();

        const fetchFolder = async () => {
            const folders__ = await axios.get('http://localhost:7000/user_file/folders/id/' + this.props.match.params.place);
            this.setState({folders : folders__.data});
            console.log(this.state.folders);
        }
        fetchFolder();
    }

    render() { 
        return ( 
            <div className="fi_wrapper">
            {   
                this.state.file.length === 0 && this.state.folders.length === 0 ? <div>
                   <div className="svg_fi"><svg className="svg_fi" id="b61e48c1-5578-41dd-9a23-f8d90b26170f" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="657.77917" height="739.31308" viewBox="0 0 657.77917 739.31308"><ellipse cx="556.77917" cy="729.31308" rx="101" ry="10" fill="#e6e6e6"/><path d="M513.77968,289.09222H275.52258a4.41735,4.41735,0,0,1-4.41216-4.41216v-59.1014a4.41736,4.41736,0,0,1,4.41216-4.41217h238.2571a4.41736,4.41736,0,0,1,4.41216,4.41217v59.1014A4.41735,4.41735,0,0,1,513.77968,289.09222Zm-238.2571-66.16086a2.65019,2.65019,0,0,0-2.6473,2.6473v59.1014a2.65019,2.65019,0,0,0,2.6473,2.6473h238.2571a2.6502,2.6502,0,0,0,2.6473-2.6473v-59.1014a2.6502,2.6502,0,0,0-2.6473-2.6473Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><circle cx="41.43247" cy="172.51817" r="17.97281" fill="#6c63ff"/><path d="M354.05151,240.87975a2.99547,2.99547,0,0,0,0,5.99094H495.26644a2.99547,2.99547,0,1,0,0-5.99094Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M354.05151,258.85256a2.99547,2.99547,0,0,0,0,5.99094h60.76522a2.99547,2.99547,0,0,0,0-5.99094Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M382.34281,508.76164H276.45053a4.41735,4.41735,0,0,1-4.41216-4.41216V394.067a4.41735,4.41735,0,0,1,4.41216-4.41216H382.34281A4.41735,4.41735,0,0,1,386.755,394.067V504.34948A4.41735,4.41735,0,0,1,382.34281,508.76164ZM276.45053,391.41971a2.6502,2.6502,0,0,0-2.6473,2.6473V504.34948a2.65019,2.65019,0,0,0,2.6473,2.64729H382.34281a2.65019,2.65019,0,0,0,2.6473-2.64729V394.067a2.65019,2.65019,0,0,0-2.6473-2.6473Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><path d="M299.01407,412.3971a2.99546,2.99546,0,1,0,0,5.99093h60.76521a2.99547,2.99547,0,1,0,0-5.99093Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M299.01407,430.04574a2.99547,2.99547,0,1,0,0,5.99094h60.76521a2.99547,2.99547,0,0,0,0-5.99094Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M329.39689,486.01939a18.8551,18.8551,0,1,1,18.85509-18.8551A18.87646,18.87646,0,0,1,329.39689,486.01939Z" transform="translate(-271.11042 -80.34346)" fill="#6c63ff"/><path d="M583.8119,133.52748H689.70418a4.41735,4.41735,0,0,1,4.41216,4.41216V248.22211a4.41736,4.41736,0,0,1-4.41216,4.41217H583.8119a4.41736,4.41736,0,0,1-4.41216-4.41217V137.93964A4.41735,4.41735,0,0,1,583.8119,133.52748ZM689.70418,250.86941a2.65019,2.65019,0,0,0,2.6473-2.6473V137.93964a2.65019,2.65019,0,0,0-2.6473-2.64729H583.8119a2.65019,2.65019,0,0,0-2.6473,2.64729V248.22211a2.65019,2.65019,0,0,0,2.6473,2.6473Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><path d="M667.14065,229.892a2.99546,2.99546,0,0,0,0-5.99093H606.37543a2.99546,2.99546,0,1,0,0,5.99093Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M667.14065,212.24338a2.99547,2.99547,0,0,0,0-5.99094H606.37543a2.99547,2.99547,0,0,0,0,5.99094Z" transform="translate(-271.11042 -80.34346)" fill="#e6e6e6"/><path d="M636.75782,156.26974a18.85509,18.85509,0,1,1-18.85509,18.85509A18.87645,18.87645,0,0,1,636.75782,156.26974Z" transform="translate(-271.11042 -80.34346)" fill="#6c63ff"/><path d="M568.29635,423.28H468.96026l23.37713-40.49105a4.77367,4.77367,0,0,1,8.26849,0l9.98639,17.297,16.98036-29.41067a5.97673,5.97673,0,0,1,10.3522,0Z" transform="translate(-271.11042 -80.34346)" fill="#6c63ff"/><path d="M568.39007,423.26919H462.49778a4.41735,4.41735,0,0,1-4.41216-4.41216V359.75562a4.41735,4.41735,0,0,1,4.41216-4.41216H568.39007a4.41735,4.41735,0,0,1,4.41216,4.41216V418.857A4.41735,4.41735,0,0,1,568.39007,423.26919ZM462.49778,357.10832a2.65019,2.65019,0,0,0-2.64729,2.6473V418.857a2.65019,2.65019,0,0,0,2.64729,2.64729H568.39007a2.65019,2.65019,0,0,0,2.64729-2.64729V359.75562a2.65019,2.65019,0,0,0-2.64729-2.6473Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><path d="M384.29635,148.28H284.96026l23.37713-40.491a4.77367,4.77367,0,0,1,8.26849,0l9.98639,17.297,16.98036-29.41067a5.97673,5.97673,0,0,1,10.3522,0Z" transform="translate(-271.11042 -80.34346)" fill="#6c63ff"/><path d="M384.39007,148.26919H278.49778a4.41735,4.41735,0,0,1-4.41216-4.41216V84.75562a4.41735,4.41735,0,0,1,4.41216-4.41216H384.39007a4.41735,4.41735,0,0,1,4.41216,4.41216V143.857A4.41735,4.41735,0,0,1,384.39007,148.26919ZM278.49778,82.10832a2.65019,2.65019,0,0,0-2.64729,2.6473V143.857a2.65019,2.65019,0,0,0,2.64729,2.64729H384.39007a2.65019,2.65019,0,0,0,2.64729-2.64729V84.75562a2.65019,2.65019,0,0,0-2.64729-2.6473Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><circle cx="557.41816" cy="219.32229" r="28.47229" fill="#ffb8b8"/><path d="M857.7704,351.22368l-48.47985-.76952c4.17-11.49016,5.97713-22.24867,3.07808-31.55038l36.937-3.8476Q841.81946,333.13994,857.7704,351.22368Z" transform="translate(-271.11042 -80.34346)" fill="#ffb8b8"/><path d="M756.96309,542.065l8.05045,21.46788a13.00007,13.00007,0,0,1-10.59863,17.4691h0a13.00007,13.00007,0,0,1-14.56418-13.4041l.95244-24.76336,6.92569-126.971,28.47229,8.46473Z" transform="translate(-271.11042 -80.34346)" fill="#ffb8b8"/><path d="M900.09408,542.065l-8.05046,21.46788a13.00007,13.00007,0,0,0,10.59863,17.4691h0a13.00007,13.00007,0,0,0,14.56418-13.4041l-.95243-24.76336-6.9257-126.971L880.856,424.32822Z" transform="translate(-271.11042 -80.34346)" fill="#ffb8b8"/><polygon points="598.972 700.273 575.887 697.965 555.11 496.35 525.868 701.812 504.321 701.043 498.935 475.573 602.05 475.573 598.972 700.273" fill="#2f2e41"/><path d="M794.66964,288.89245s7.69521,16.92947,13.08186,17.699,14.62091,9.23426,13.08187,13.08186-.76952,15.39043,14.6209,13.85139,14.62091-3.07808,14.62091-3.07808,24.62469-46.94081-.76952-59.25316S801.59533,268.11537,794.66964,288.89245Z" transform="translate(-271.11042 -80.34346)" fill="#2f2e41"/><path d="M774.25439,770.37232l.92491,19.42316s-14.0971,21.98679,3.47624,21.98679c.17573,0-.17352.00055,0,0,12.709-.04024,24.19541,5.67939,22.693-6.94053l-2.12155-17.821-3.69965-19.42317Z" transform="translate(-271.11042 -80.34346)" fill="#2f2e41"/><path d="M869.89026,770.37232l-.92491,19.42316s14.0971,21.98679-3.47624,21.98679c-.17573,0,.17352.00055,0,0-12.709-.04024-24.19541,5.67939-22.693-6.94053l2.12155-17.821,3.69965-19.42317Z" transform="translate(-271.11042 -80.34346)" fill="#2f2e41"/><path d="M881.62556,565.15065,766.96687,559.764c21.38371-68.62071,21.5419-124.76917-5.38665-176.47163a27.68309,27.68309,0,0,1,16.731-25.4245l33.2879-14.3394,42.3236,2.30856,27.92713,15.3599a33.24452,33.24452,0,0,1,17.17994,30.8287C874.57982,450.39156,873.18337,507.94459,881.62556,565.15065Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><path d="M796.20868,431.25391l-63.87028-10.7733,10.52292-26.12587A68.84712,68.84712,0,0,1,784.536,354.90266l6.28606-2.13993Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/><path d="M860.84848,431.25391l63.87028-10.7733-10.52292-26.12587a68.84712,68.84712,0,0,0-41.67465-39.45208l-6.28606-2.13993Z" transform="translate(-271.11042 -80.34346)" fill="#3f3d56"/></svg></div>
                    <NavLink to="/LandingPage"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-circle-fill back-icon-fileinfo-empty" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg></NavLink> 
                    <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}>
                    <div onClick={this.handleClick}>
                    <img src={file} className="file_fi" />
                    </div>
                    </NavLink>
                    <NavLink to={`/newFile/${this.props.match.params.place}`}>
            <img src={folder} className="folder_efi"></img>
            </NavLink>
                    <p className="add-file-desc">Add your first file/folder</p>
                </div> 
                :
            <React.Fragment>
            {this.state.addAll && <div className="add-all">
            <img src={add} className="add-all" onClick={this.handleAdd}></img>
            </div>}
            {this.state.filefolder && <div className="add-file-folders">
            <NavLink to={`/newFile/${this.props.match.params.place}`}>
            <img onClick={this.handleClick} src={folder} className="folder_flex"/>
            </NavLink>
            <NavLink to={`/newFileInFolder/${this.state.name}/${this.state.hospital}`}>
            <img src={file} className="file_flex"></img>
            </NavLink>
            <img src={cross} onClick={this.handleClose} className="cross" />
            </div>}
            {this.state.allcontent && <div className="all-content">
                <div className="separator-file"></div>
                {
                    this.state.folders.map(item => {
                        return <File info={item}/>
                    }   
                )}
                {
                    this.state.file.map(item => {
                        return <IndividualFile data={item}/>
                    }   
                )}
            </div>}
                </React.Fragment>
            }
            </div>
         );
    }
}
 
export default FileInfo;