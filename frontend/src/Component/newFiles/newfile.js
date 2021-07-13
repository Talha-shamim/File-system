import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./form.css";
import axios from "axios";
import react from "react";

class Form extends Component {
  constructor(props){
    super(props)
    this.state = { 
      file: [
        {
          name: "",
          hospital: "",
        },
      ],
      error: {},
    };
  }

  validate = () => {
    const error = {};
    if (this.state.file["name"].trim() === "") {
      error.name = "Doctor name is required";
    }
    if (this.state.file["hospital"].trim() === "") {
      error.hospital = "Hospital name is required";
    }

    this.setState({ error: error });

    return Object.keys(error).length === 0 ? null : error;
  };

  handleFormSubmission = (e) => {
    this.validate();
    alert("saving");
    e.preventDefault();
    const data = {
      parent_folder: this.props.match.params.place,
      doc_name: this.state.file.name,
      hos_name: this.state.file.hospital,
    };
    console.log(data)
    axios
      .post(
        "http://localhost:7000/user_file/Folder/60cf889a5a23f946cc76fa71",
        data
      )
      .then((res) => {
        console.log(res);
        this.props.history.push('/landingPage');
      })
      .catch((err) => {
        console.log(err);
      });

    this.state.file.name = "";
    this.state.file.hospital = "";
  };

  handleChange = (e) => {
    const account = { ...this.state.file };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ file: account });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper_form__">
          <NavLink to="/LandingPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill back-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </NavLink>
          <div className="form_wrapper">
          <div className="form-wrapper-folder">
            <form className="form" onSubmit={this.handleFormSubmission}>
              <div className="form-group ">
                <label className="name_label" htmlFor="name">
                  Dr. Name
                </label>
                <input
                  className="name"
                  type="text"
                  name="name"
                  value={this.state.file.name}
                  onChange={this.handleChange}
                ></input>
                {this.state.error.name && (
                  <div className="alert alert-danger">
                    {this.state.error.name}
                  </div>
                )}
              </div>
              <div className="form-group ">
                <label className="hospital_label" htmlFor="name">
                  Hospital
                </label>
                <input
                  className="hospital"
                  type="text"
                  name="hospital"
                  value={this.state.file.hospital}
                  onChange={this.handleChange}
                ></input>
                {this.state.error.hospital && (
                  <div className="alert alert-danger">
                    {this.state.error.hospital}
                  </div>
                )}
              </div>
                <button className="save__folder" type="submit">
                  Add
                </button>
            </form>
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
