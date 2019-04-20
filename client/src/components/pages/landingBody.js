import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Carousel from 'react-bootstrap/Carousel'
import '../../App.scss'
import egypt from '../layout/This is Egypt.mp4'
import {Redirect} from 'react-router-dom'
import Header from '../layout/header'
import ReactDOM from 'react-dom';
import Companies from '../pages/Companies'
import Footer from '../layout/footer'
import { Animate, AnimateGroup } from 'react-simple-animate';
import Egypt from '../layout/Egypt.jpg'
import trans from '../translations/landingTranslation'

class LandingBody extends Component {
   props = {
    startStyle: { opacity: 0 },
    endStyle: { opacity: 1 }
  };
  logOut(){
    localStorage.setItem('isLoggedIn','false')
    localStorage.setItem('jwtToken','')
    localStorage.setItem('type','')
    document.location.href='/'
}
  render() {
    var loggedIn = <div><Button variant="outline-light" size="lg"  onClick={this.logOut}>Signout</Button><Button variant="outline-light" size="lg" href="/journal">{trans.electronicjournal}</Button></div>
    var notloggedIn =  <div><Button variant="outline-light" size="lg"  href="/register">{trans.signup}</Button> <Button variant="outline-light" size="lg" href="/login">{trans.signin}</Button><Button variant="outline-light" size="lg" href="/journal">{trans.electronicjournal}</Button></div>
    trans.setLanguage(this.props.lang)
    return (
       
        <Carousel>
        <Carousel.Item > 
          <div style={{position: "fixed", top: "0", zIndex: "0",width:"100%"}}>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%" object-fit="cover">
                 <source src={egypt} type="video/mp4"></source>
            </video>
          </div>
          <br/>
          <br/>
          <AnimateGroup play style={{display:"flex"}}>
         
     
          <view style={{display:"flex", justifyContent:'center' , alignItems:'center'}}>

       <Animate delaySeconds="0.1" durationSeconds= "0.6"  endStyle={{ opacity: 1, transform: 'translateY(-10px)' }}
        startStyle={{ opacity: 0, transform: 'translateY(0)' }} sequenceIndex={3} ><h1 style={{fontSize:"100px", textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>G&nbsp;</h1></Animate>    
        <Animate durationSeconds= "0.6" endStyle={{ opacity: 1, transform: 'translateY(-10px)' }}
        startStyle={{ opacity: 0, transform: 'translateY(0)' }} sequenceIndex={4}><h1 style={{fontSize:"100px", textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white' }}>A&nbsp;</h1></Animate>
        <Animate durationSeconds= "0.6" endStyle={{ opacity: 1, transform: 'translateY(-10px)' }}
        startStyle={{ opacity: 0, transform: 'translateY(0)' }} sequenceIndex={5} ><h1 style={{fontSize:"100px", textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white' }}>F&nbsp;</h1></Animate>
        <Animate durationSeconds= "0.6" endStyle={{ opacity: 1, transform: 'translateY(-10px)' }} 
        startStyle={{ opacity: 0, transform: 'translateY(0)' }} sequenceIndex={6} ><h1 style={{fontSize:"100px", textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white' }}>I&nbsp;</h1></Animate>
         <Animate durationSeconds= "0.6" endStyle={{ opacity: 1, transform: 'translateY(-10px)' }} 
        startStyle={{ opacity: 0, transform: 'translateY(0)' }} sequenceIndex={7} ><img src={Egypt} height="50px" width="80px" /></Animate>
  </view>
  </AnimateGroup>
          <div style={{height:"570px"}}>
          <Carousel.Caption>
            <h1>{trans.invest}</h1>
             {localStorage.getItem('isLoggedIn')==='true'?loggedIn:notloggedIn} 
          </Carousel.Caption>
          </div>
        </Carousel.Item>
         {/* <Carousel.Item>
          <Companies/>
          </Carousel.Item> */}
        {/*<Carousel.Item>
          <img
            className="d-block w-100"
             src={sum}
            alt="Third slide"
            height="100%"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      
        )}
}

export default LandingBody;
