import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import Form from './form'
import Footer from '../layout/footer'
import ReactDOM from 'react-dom';

class Investor extends Component {

    constructor(){
        super()
      }

    render (){
        return (   
         <div> 
         <Form />
         <br />
         <br />
         <Footer />
         </div>
        )
    }

}
export default Investor
