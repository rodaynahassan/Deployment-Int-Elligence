import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Footer from '../layout/footer'
import {Row,Col,Container,Image} from 'react-bootstrap'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import background from '../../backkk.jpeg'
import Header from '../layout/header'
class About extends Component{

    constructor()
    {
        super()
    }

     render()
     {
         return (
             <section style={{ width:"100%" ,height:"800px", backgroundImage:"url("+background+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>   
        <Header/>
        <br />
        <Card bg="light" text="grey" style={{ width: '30rem',height:'20rem' }}>
        <Card.Header>About Us</Card.Header>
        <Card.Body>
        <Card.Title>Info</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
        <Form>
        </Form>
        </Card.Body>
        </Card>
        <Footer />
        </section>

          )
     }
    
}

ReactDOM.render(<About />, document.getElementById('root'));
export default About