import  React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class Reject extends Component{

    constructor(props)
    {
        super(props)
        this.state=
        {
            cases:[]
        }
    }

    //if a reviewer wants to reject
    handleClick(event)
    {
        var apiBaseUrl = "http://localhost:5000/routes/api/users/reject/:formId/:userId"
        axios.post(apiBaseUrl)
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    // render() {
    //     return  (

    //     ); 
    // }


}

export default Reject