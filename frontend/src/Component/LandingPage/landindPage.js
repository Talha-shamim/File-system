import React, { Component } from "react";
import File from "../files/file";
import { NavLink, Link } from "react-router-dom";
import "./landingPage.css";
import axios from "axios";
import folder from './folder.png'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  componentDidMount() {
    const fetchFile = async () => {
      const getFile = await axios.get(
        "http://localhost:7000/user_file/60cf889a5a23f946cc76fa71"
      );
      this.setState({ reports: getFile.data });
      console.log(getFile.data);
    };
    fetchFile();
  }

  handleSearch = () => {
    alert("dsa");
  };

  render() {
    return (
      <div>
        {this.state.reports.length === 0 ? (
          <div className="lp_wrapper">
            <p className="add-folders-empty">Your DNM Vault</p>
            <NavLink to="/newFile/root">
              <img src={folder} className="folder_lp"></img>
            </NavLink>
          </div>
        ) : (
          <div className="lp_wrapper__">
          <p className="add-folders">Your DNM Vault</p>
            <div className="container wrapper-lp">
              <div className="row row-cols-1">
                <NavLink to="/newFile/root">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-folder-plus add-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                    <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </NavLink>
                {this.state.reports.map((item) => {
                  return (
                    <File
                      info={item}
                      onClick={() => this.handleFileClick(item)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
