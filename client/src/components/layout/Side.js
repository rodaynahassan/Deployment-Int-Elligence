
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import NavLink from 'react-bootstrap/NavLink';


class Side extends Component{

   logOut(){
        localStorage.setItem('isLoggedIn','false')
        localStorage.setItem('jwtToken','')
        localStorage.setItem('type','')
        document.location.href='/'
    }
        render()
       {    
                var profile = <NavItem eventKey="home">
                    <NavIcon>
<<<<<<< HEAD
                    <a href="/profile" title="Profile" >
=======
                    <a href="/profile">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
                        <i className="far fa-user" style={{ fontSize: '1.75em'  }} ></i>
                        </a>
                    </NavIcon>
                    <NavText >
                        <a href="/profile">
                        My Page
                        </a>
                    </NavText>
                </NavItem>
            
                var signout = <NavItem eventKey="home">
                <NavIcon>
<<<<<<< HEAD
                <a onClick={this.logOut} title="Logout" >
=======
                <a onClick={this.logOut}>
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
                    <i className=" 	fas fa-sign-in-alt" style={{ fontSize: '1.75em'  }} ></i>
                    </a>
                </NavIcon>
                <NavText >
                    <a onClick={this.logOut}>
                    Logout
                    </a>
                </NavText>
            </NavItem>
                return(
            <SideNav 
                onSelect={(selected) => {
                    
                }}
                // , left:"96%",right:"0" in the side nav.nav style={{ direction:'rtl'}}
                style={{backgroundColor:"#0000", height:"100%" , position:"fixed"}} 
            >
                <SideNav.Toggle />
                <SideNav.Nav >

<<<<<<< HEAD
                    <NavItem eventKey="home" title="Home"  >
=======
                    <NavItem eventKey="home" >
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
                        <NavIcon>
                        <a href="/">
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} ></i>
                            </a>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}} >
                            <a href="/">
                            Home
                            </a>
                        </NavText>
                    </NavItem>
<<<<<<< HEAD
                    <NavItem eventKey="electronic journal" title="Electronic Journal"   >
=======
                    <NavItem eventKey="electronic journal"  >
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
                        <NavIcon>
                        <a href="/journal">
                            <i className="fa fa-fw fa-newspaper" style={{ fontSize: '24px'}} />
                            </a>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}}>
                        <a href="/journal">
                            Electronic Journal
                            </a>
                        </NavText>  
                    </NavItem>
                    <NavItem eventKey="home" >
                        <NavIcon>
<<<<<<< HEAD
                        <a href="/about" title="About us" >
=======
                        <a href="/about">
>>>>>>> 4d051423ab27b13bda556ba1e986fb699ea5b524
                            <i className="fa fa-info-circle" style={{ fontSize: '1.75em' }} ></i>
                            </a>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}} >
                            <a href="about">
                            About Us
                            </a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home" >
                        <NavIcon>
                        <i className="fas fa-language" style={{ fontSize: '24px' }}></i>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}}>
                        Language
                        </NavText>
                
                    <NavItem eventKey="home" >
                        <NavIcon>
                            <i className="material-icons" style={{ fontSize: '1.75em' }} ></i>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}}>
                        <a onClick={()=>this.props.changelang('en')}>
                            English
                        </a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home" >
                        <NavIcon>
                            <i className="material-icons" style={{ fontSize: '1.75em' }} ></i>
                        </NavIcon>
                        <NavText style={{direction:'rtl'}}>
                        <a onClick={()=>this.props.changelang('ar')}>
                            Arabic
                        </a>
                        </NavText>
                    </NavItem>
                    </NavItem>
                    {localStorage.getItem('isLoggedIn')==='true'? profile:null}
                    {localStorage.getItem('isLoggedIn')==='true'? signout:null}
                </SideNav.Nav>
            </SideNav>
    )
}
}
export default Side
