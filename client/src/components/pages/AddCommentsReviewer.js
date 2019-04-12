import  React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import '../../App.css';
const mongoose = require('mongoose')



class AddCommentsReviewer extends Component{

    

    constructor(props)
    {
        super(props);
        
        this.state=
        {
            reviewerComments:
            {
                value : [],
            } ,
            
            input : 
            {
              value: '' ,
            }
        }
    }
     
    getInitialState () {
        return ({ input: '' }
        );
      }

      handleChange(e) {
       return (this.setState({ input: e.target.value })
       );
      }

      handleClick1 () {
        console.log(this.state.input);
      }
    

    //onClick={this.handleClick.bind(this, case.id)}


    //if the id belongs to a lawyer
    handleClick = (formId,event) =>
    {
        var apiBaseUrl =('http://localhost:5000/routes/api/users/reviewerComments/'+mongoose.Types.ObjectId('5cad2bfc9b67f60ce098a60e')+'/'+mongoose.Types.ObjectId(formId))
        var payload={
            "reviewerComments": this.state.reviewerComments.value
        }
        axios.put(apiBaseUrl, payload)
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    changeHandler = event => {
        this.setState({reviewerComments :{ value: [event.target.value], valid: !!event.target.value } });
      };

      handleEvent = () => {
        alert("I was clicked");
      };


      validateForm ()
    {
        return (
        this.state.reviewerComments.value.length >= 1 
        //this.state.data.reviewerComments.vaue.length>=3 && this.state.data.reviewerComments.value.length <=100
        )
    }


    render() {
        
        return (

            <div>
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Add a Comment 
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <input type="text" placeholder='Enter Your Comment..' style={{width: "775px" , height:"100px"}} onChange={ this.changeHandler} />
                <Button
                type="button"
                block
                variant="dark"
                value="Comment"
                style={{width: "300px" ,display:"flex", flexWrap:"wrap", alignItems:"middle" , justifyContent:"middle"}}
                disabled={!this.validateForm()}
                onClick={() => (this.handleClick(this.props.formId) , alert('Comments added Succesfully'))}
                >Comment</Button>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='red' onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

     



        {/* <input type="text" placeholder ='Enter your Comment' onChange={ this.changeHandler} />
        <Button
          type="button"
          value="Add Comment"
          variant = "dark"
          block
          onClick={() => (this.handleClick() , alert('Comments added Succesfully'))}
        >Add Comment</Button> */}
      </div>

           
        
          )
    }
}

 export default AddCommentsReviewer
