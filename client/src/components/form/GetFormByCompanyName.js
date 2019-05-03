import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";
import style from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Table } from "semantic-ui-react";
import { Card } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import jsPDF from "jspdf";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import styled, { css } from "styled-components";
import trans from "../translations/searchCompanyTranslation";
import Autocomplete from "Autocomplete";

//import { Dropdown } from 'semantic-ui-react';
import axios from "axios";

var mongoose = require("mongoose");

class MyCompany extends Component {
  state = {
    companyName: "",
    companies: [],
    viewedComp: []
  };

  componentDidMount = () => {
    axios
      .get("/routes/api/dynamicForms/", {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(res => {
        this.setState({
          companies: res.data.data
        });
      });
  };

  //do you mean get all forms?

  tabRow() {
    return this.state.companies.map(function(company, i) {
      return (
        <Dropdown.Item key={i}>
          <h6>{company}</h6>
        </Dropdown.Item>
      );
    });
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value } });
  };

  handleClick(event) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwtToken");
    var apiBaseUrl = "/routes/api/admins/getByCompanyName/";

    axios
      .get(apiBaseUrl + this.state.companyName.value, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(res => {
        this.setState({ viewedComp: res.data.data });
      });
  }

  getAttributes = () => {
    return this.state.viewedComp.map((Form, index) => {
      var KEYS = [];
      // console.log(Form)
      for (var key in Form) {
        KEYS.push(key);
      }
      return (
        <Card>
          <Card.Body>
            {KEYS.map((key, index) => {
              if (
                key !== "_proto" &&
                key !== "_id" &&
                key !== "formType" &&
                key !== "investorId" &&
                key !== "lawyerId" &&
                key !== "reviewerId" &&
                key !== "__v"
              ) {
                var constraints = Form[key];
                if (Array.isArray(constraints)) {
                  if (!constraints["0"]) return;
                  var keys = [];
                  for (var att in constraints["0"]) {
                    keys.push(att);
                  }
                }
                return (
                  <div>
                    <div key={key}>
                      <h3>
                        <i
                          class="fas fa-circle"
                          style={{ fontSize: "0.5em" }}
                        />{" "}
                        {key} : {constraints}{" "}
                      </h3>
                    </div>
                  </div>
                );
              }
            })}
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    trans.setLanguage(this.props.lang);
    return (
      // <div style={{paddingLeft:"60px"}}>
      <div>
        <MDBCol>
          <MDBRow style={{ paddingLeft: "41%", paddingTop: "5%" }}>
            <MDBInput
              icon="search"
              label={trans.label}
              value={this.state.companyName.value}
              name="companyName"
              onChange={this.changeHandler}
              type="text"
              id="materialFormRegisterNameEx"
              required
            />
          </MDBRow>
        </MDBCol>
        <div style={{ paddingLeft: "44%", paddingBottom: "70px" }}>
          <Button
            variant="omar"
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "#a3dbf1"
            }}
            onClick={event => this.handleClick(event)}
            type="submit"
          >
            {trans.search}
          </Button>
        </div>
        <br />
        <div>{this.getAttributes()}\ </div>
        
        <Autocomplete suggestions={this.state.companies} />
      </div>

      
    );
  }
}

// ReactDOM.render(<MyCompany />, document.getElementById('root'));
export default MyCompany;
