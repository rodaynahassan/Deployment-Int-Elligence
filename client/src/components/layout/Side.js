
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React,{ Component } from 'react';
import NavLink from 'react-bootstrap/NavLink';
import Journal from './Journal1.png'
class Side extends Component{
    logOut(){
        localStorage.setItem('isLoggedIn','false')
        localStorage.setItem('jwtToken','')
        localStorage.setItem('type','')
        document.location.href='/'
    }
render(){ 
    
    var profile = <NavItem eventKey="home">
        <NavIcon>
        <a href="/profile">
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
    <a onClick={this.logOut}>
        <i className="  fas fa-sign-in-alt" style={{ fontSize: '1.75em'  }} ></i>
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
    style={{backgroundColor:"dark", height:"100%" , marginRight:"20%",position:"absolute",left:"96%",right:"0",zIndex:"2"}}
>
    {/* <SideNav.Toggle  /> */}
    <SideNav.Nav >
        <NavItem eventKey="home">
            <NavIcon>
            <a href="/">
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} ></i>
                </a>
            </NavIcon>
            <NavText >
                <a href="/">
                Home
                </a>
            </NavText>
            <NavItem/>
        </NavItem>
        <NavItem eventKey="electronic journal">
            <NavIcon>
            <a href="/journal">
                <i className="fa fa-fw fa-newspaper" style={{ fontSize: '24px' }} />
                </a>
            </NavIcon>
            <NavText>
            <a href="/journal">
                Electronic Journal
                </a>
            </NavText>
            
            
            
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
            <a href="/about">
                <i className="fa fa-info-circle" style={{ fontSize: '1.75em' }} ></i>
                </a>
            </NavIcon>
            <NavText >
                <a href="about">
                About Us
                </a>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
            <i className="fas fa-language" style={{ fontSize: '24px' }}></i>
            </NavIcon>
            <NavText >
               Language
            </NavText>
       
        <NavItem eventKey="home">
            <NavIcon>
                <i className="material-icons" style={{ fontSize: '1.75em' }} ></i>
            </NavIcon>
            <NavText >
               <a onClick={()=>this.props.changelang('en')}>
                   English
               </a>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="material-icons" style={{ fontSize: '1.75em' }} ></i>
            </NavIcon>
            <NavText >
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

