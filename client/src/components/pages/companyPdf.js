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
import html2canvas from "html2canvas";
import styled, { css } from "styled-components";
import { Button} from "react-bootstrap";
import egypt from "../../egypt.jpeg";
import gafi from "../../gafi.jpeg";

//import { Dropdown } from 'semantic-ui-react';
import axios from "axios";

var mongoose = require("mongoose");

class PDF extends Component {
  state = {
    companyName: "",
    companies: [],
    viewedComp: []
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value } });
  };

  printDocument() {
    const input = document.getElementById("divToPrint");

    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/jpeg");
      const img = new Image();
      var path = require("path");
      img.src = path.resolve(egypt);
      const img2 = new Image();
      var path2 = require("path");
      img2.src = path2.resolve(gafi);
      var pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [800, 1100]
      });

      pdf.addImage(imgData, "JPEG", 1, 1);
      pdf.addImage(img, "JPEG", 1, 1);
      pdf.addImage(img2, "JPEG", 13.2, 1);

      pdf.setFont("helvetica");
      pdf.setFontType("bold");
      pdf.setFontSize(30);
      pdf.text(6.2, 3, "Your Company");

      pdf.setFont("helvetica");
      pdf.setFontType("normal");
      pdf.setFontSize(15);
      pdf.text(1, 10, "© 2019 Copyright: GAFI");

      // pdf.output('dataurlnewwindow')
      pdf.save("download.pdf");
    });
  }

  getAttributes = () => {
      var compname = localStorage.getItem('PDFcomp')
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwtToken");
    var apiBaseUrl = "/routes/api/userDynamicForms/getByCompanyName/";

    axios
      .get(apiBaseUrl + localStorage.getItem('PDFcomp'), {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(res => {
        this.setState({ viewedComp: res.data.data });
        
        
      });
      console.log(localStorage.getItem('PDFcomp'))
      console.log(this.state.viewedComp);

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
             <MuiThemeProvider>
              <Button
                label="Save As PDF"
                variant="dark"
                size="sm"
                width="60px"
                height="2px"
                style={{ marginTop: "100px", width: "120px", height: "50px" }}
                onClick={this.printDocument}
              >
                <h6 style={{ fontSize: "15px" }}> Save As PDF</h6>
                <i
                  class="far fa-file-pdf"
                  style={{ fontSize: "1.6em", left: "7%", color: "light blue" }}
                />
              </Button>
            </MuiThemeProvider>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      // <div style={{paddingLeft:"60px"}}>
      <div>
        {/* <MDBCol>
          <MDBRow style={{ paddingLeft: "41%", paddingTop: "5%" }}>
            <MDBInput
              icon="search"
              label="Search For A Company"
              value={this.state.companyName.value}
              name="companyName"
              onChange={this.changeHandler}
              type="text"
              id="materialFormRegisterNameEx"
              required
            />
          </MDBRow>
        </MDBCol>

        <div style={{ paddingLeft: "45%" }}>
          <MuiThemeProvider>
            <RaisedButton
              label="Search"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </MuiThemeProvider>
        </div>
        <br /> */}
        <div>{this.getAttributes()}</div>
      </div>
    );
  }
}

ReactDOM.render(<PDF />, document.getElementById("root"));
export default PDF;
