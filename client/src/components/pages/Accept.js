// import  React, { Component } from 'react';
// import axios from 'axios';
// import '../../App.css';
// import {Button} from 'react-bootstrap'


// class Accept extends Component{

//     constructor(props)
//     {
//         super(props);
//         // this.state=
//         // {
//         //     cases:[]
//         // }
//     }
    
//     //if a lawyer or reviewer wants to accept
//     handleClick(event)
//     {
//         var apiBaseUrl = "http://localhost:5000/routes/api/users/accept/5ca8c5ec70ae99ac12c71480/5ca6302c13e5d0343c6e2a10"
//         axios.post(apiBaseUrl)
//        .then(function (response) {
//          console.log(response);
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
//     }


//     render() {
//         return  (
//           <div>
//             <Button variant="dark" onClick={this.handleClick.bind(this, cases.id)}>Accept</Button>
//           </div>
//         ); 
//     }


// }
// export default Accept







import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import "mdbreact/dist/css/mdb.css";
const mongoose = require('mongoose')

export default class Accept extends React.Component{

    constructor(props) {
        super(props)
    }
    accept = () => {
    axios.put('http://localhost:5000/routes/api/users/accept/' + mongoose.Types.ObjectId('5cae00c04f58ca8e5af7b173') +'/' + mongoose.Types.ObjectId('5ca6302c13e5d0343c6e2a10'))
    }


  render()
    {
        return (
            <div>
                 <br/>
                <Button variant="dark" onClick={()=>this.accept()}>Accept Case</Button> 
               </div>
               )}

   }