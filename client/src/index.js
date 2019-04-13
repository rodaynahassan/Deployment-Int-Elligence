import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/layout/footer'
import About from './components/pages/aboutContactUsPage'
import Profile from './components/pages/profilePage'
import * as serviceWorker from './serviceWorker';
import UpdateSSCForm from './components/pages/UpdateSSCForm'
import SSCForm from './components/pages/SSCForm'

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
