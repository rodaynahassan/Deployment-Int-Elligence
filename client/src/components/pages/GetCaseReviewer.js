import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import { Button, Container ,ButtonGroup,ButtonToolbar,Card} from "react-bootstrap";
import "mdbreact/dist/css/mdb.css";
import { MDBProgress } from 'mdbreact'
import AddCommentsReviewer from '../pages/AddCommentsReviewer'
import CardReviewer from "../form/CardReviewer";
import GetAllReviewerForms from "../form/GetAllReviewerForms";
import { Dropdown } from "react-bootstrap";
import { blue200 } from "material-ui/styles/colors";
import trans from '../translations/getReviewerTranslation'
const mongoose = require('mongoose')
var $ = require("jquery")(window);

class Companies extends Component {
  state = {
    companies: [],
    modalShow: false 
  };
  componentDidMount() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("jwtToken");
    axios
      .get(
        "/routes/api/userDynamicForms/getReviewerInProgressCases",
        { headers: { Authorization: localStorage.getItem("jwtToken") } }
      )
      .then(res => {
        if (Array.isArray(res.data.data)) {
          this.setState({ companies: res.data.data });
        }
      });
  }

  // accept = (formId) => {
  //   console.log("hi");
  //   axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  //     "jwtToken"
  //   );
  //   axios
  //     .put(
  //       "/routes/api/userDynamicForms/accept/" +
  //         mongoose.Types.ObjectId(formId),
  //       { headers: { Authorization: localStorage.getItem("jwtToken") } })
  //     .then((res) => {
  //       alert("The form was accepted succesfully");
  //       document.location.href = '/GetReviewer';
  //     })
  //     .catch((err)=>{
	// 			alert(err.response.data.msg|| err.response.data);
	// 			console.log(err.response);
	// 		})
  // };
	accept = (formId) => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.put('/routes/api/userDynamicForms/accept/' + mongoose.Types.ObjectId(formId), {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((response) => {
        console.log("hello")
			})
			.catch((err)=>{
				alert(err.response.data.msg|| err.response.data);
				console.log(err.response);
			})
	};


    
  reject = (formId) => {
    console.log("hi");
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .put(
        "/routes/api/userDynamicForms/reject/" +
          mongoose.Types.ObjectId(formId),
        { headers: { Authorization: localStorage.getItem("jwtToken") } }
      )
      .then(res => {
        console.log('Reject')
      });
  };



  sort = () => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .get(
        "/routes/api/userDynamicForms/SpecificFormSortedByFormId",
        { headers: { Authorization: localStorage.getItem("jwtToken") } }
      )
      .then(res => {
        this.setState({ companies: res.data.data });
        alert("Cases have been sorted");
        document.location.href = "/GetReviewer";
      })
      .catch(err => {
        console.log(err);
      });
  };
  // sortByCreationDate = () => {
  //   axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  //     "jwtToken"
  //   );
  //   axios
  //     .get(
  //       "/routes/api/userDynamicForms/SpecificformsSortedByformDate",
  //       { headers: { Authorization: localStorage.getItem("jwtToken") } }
  //     )
  //     .then(res => {
  //       this.setState({ companies: res.data.data });
  //       alert("Cases have been sorted");
  //       document.location.href = "/GetReviewer";
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
	// sort = () => {
	// 	axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
	// 	axios
	// 		.get('/routes/api/users/SpecificFormSortedByFormId', {
	// 			headers: { Authorization: localStorage.getItem('jwtToken') }
	// 		})
	// 		.then((res) => {
	// 			this.setState({ forms: res.data.data });
  //       alert('Cases have been sorted');
  //       document.location.href = "/GetReviewer";
	// 		})
	// 		.catch((err) => alert(err.response.data.errmsg || err.response.data));
	// };
	sortByCreationDate = () => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/userDynamicForms/SpecificformsSortedByformDate', {
				headers: { Authorization: localStorage.getItem('jwtToken') }
			})
			.then((res) => {
				this.setState({ companies: res.data.data });
        alert('Cases have been sorted');
        document.location.href = "/GetReviewer";
			})
			.catch((err) => alert(err.response.data.errmsg || err.response.data));
	};
	// tabRow = () => {
	// 	return this.state.companies.map((company, i) => {
	// 		return <CardReviewer company={company} key={i} />;
	// 	});
	// };
  getAttributes = () => {
    let modalClose = () => this.setState({ modalShow: false });
    return this.state.companies.map((Form, index) => {
      var KEYS = [];
      // console.log(Form)
      for (var key in Form) {
        KEYS.push(key);
      }
      return (
        <Card>
          <Card.Body>
            <div>
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

                    if (key === "lawyerComments") {
                      return (
                        <div>
                          {" "}
                          <h3>
                            <i class="fas fa-circle" />
                            LawyerComments
                          </h3>
                          {keys.map((att, index) => {
                            return (
                              <h5 style={{ paddingLeft: "5%" }}>
                                
                                {constraints[att]}
                              </h5>
                            );
                          })}
                        </div>
                      );
                    } else if (key === "reviewerComments") {
                      return (
                        <div>
                          {" "}
                          <h3>
                            <i class="fas fa-circle" />
                            ReviewerComments
                          </h3>
                          {keys.map((att, index) => {
                            return (
                              <h5 style={{ paddingLeft: "5%" }}>
                                
                                {constraints[att]}
                              </h5>
                            );
                          })}
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          {" "}
                          <h3>
                            <i class="fas fa-circle" style={{fontSize:"0.5em"}} />
                            {key}
                          </h3>
                          {keys.map((att, index) => {
                            return (
                              <h5 style={{ paddingLeft: "5%" }}>
                                <i class="fas fa-cicle" /> {att} :
                                {constraints["0"][att]}
                              </h5>
                            );
                          })}
                        </div>
                      );
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
							<div variant="omar" style={{ textAlign: 'right' ,color:blue200}}>
              <ButtonGroup variant="omar" size="sm" className="mt-3" style={{color:blue200}}>
                  <Button
                    variant="omar"
                    style={{ width: '120px', height: '65px',backgroundColor:"#a3dbf1" }}  
                    onClick={() => (this.accept(Form._id),alert("The form was accepted succesfully"),
                    document.location.href = '/GetReviewer')}
                    >
                    <h6>
                      <i
                        class="fas fa-handshake"
                        style={{ fontSize: "1em" }}
                      />
                      <br /> 
                      ACCEPT CASE
                    </h6>
                  </Button>
                  <Button
                    variant="omar"
                    style={{ width: '120px', height: '65px',backgroundColor:"#a3dbf1" }}  
                    onClick={() => (this.reject(Form._id),alert("Form rejected Succesfully"),
                    document.location.href = "/GetReviewer")}
                  >
                    <h6>
                      <i class="fas fa-ban" style={{ fontSize: "1em" }} />
                      <br /> REJECT CASE
                    </h6>
                  </Button>
                  <ButtonToolbar>
                    <Button
                      variant="omar"
                      style={{ width: '120px', height: '65px',backgroundColor:"#a3dbf1" }}  
                      onClick={() => this.setState({ modalShow: true })}
                    >
                      <h6>
                        <i class="fas fa-comment" 
                        style={{ fontSize: "1em" }} 
                        />
                        <br />
                        Add Comments
                      </h6>
                    </Button>
                    <AddCommentsReviewer
                      show={this.state.modalShow}
                      onHide={modalClose}
                      formId={Form._id}
                    />
                  </ButtonToolbar>
                  <br />
                </ButtonGroup>
                <div>
                <MDBProgress material value={75} color="dark" height="63px">
                <h3 style={{ color: '#64b9e0', fontSize: '30px' }}> In progress Reviewer  <br/> 75% </h3>
              </MDBProgress>
              </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              backgroundColor: '#a3dbf1',
							paddingTop: '70px',
							textAlign: 'center',
							fontSize: '50px',
							color: 'dark',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							height:"205px"
            }}
          >
            Your Cases
            <br />
            <Dropdown>
              <Dropdown.Toggle
                //className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                variant="omar"
                id="dropdown-basic"
                style={{ width: "150px",left:'0',padding: '0.5px' }}
              >
                Sort the Cases
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => this.sort()}
                  style={{ textAlign: "left" }}
                >
                  By ID
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.sortByCreationDate()}
                  style={{ textAlign: "center" }}
                >
                  By Creation Date
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {this.getAttributes()}
      </div>
    );
  }
}
export default Companies;
