import React, { Component } from 'react';
import File from '../files/file';
import { NavLink, Link } from 'react-router-dom';
import './landingPage.css';

class LandingPage extends Component {
    state = { 
        reports:[
            {
                id:1,
                name:"Dr.Talha",
                Hospital:"Rmch"
            },
            {
                id:2,
                name:"Dr.Shubham",
                Hospital:"PatnaHosp"
            },
            {
                id:2,
                name:"Dr.Santosh",
                Hospital:"AIIMS Motihari"
            },
        ]
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container wrapper-lp">
                    <h3 className="lp-head">Get all your files here</h3>
                    <div className="row row-cols-1">
                        <NavLink to="/newFile"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus-circle-fill add-icon" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg></NavLink>
                        {
                            this.state.reports.map(item => {
                                return <File info={item}  onClick={() => this.handleFileClick(item)}/>
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
            );
    }
}
 
export default LandingPage;