import React, { Component } from 'react';
//import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '../../App.scss'
import Header from '../layout/header'



class Test extends Component {
  constructor(props){
      super(props)
  }
    render() {
      console.log("hi i redirected")
    return (
        <div>

            <Header/>
        </div>
        
        )}
    }
ReactDOM.render(<Test />, document.getElementById('root'));


export default Test;