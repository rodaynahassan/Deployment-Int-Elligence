import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavLink from 'react-bootstrap/NavLink';
import Journal from './Journal1.png'

const options = [
    'Home',
    'Electronic Journal',
    'About Us',
    'Language',
    'My Page',
    'Logout',
  ];

class Side extends Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            anchorEl: null,
            option : '',
        };
        
    }

    logOut(){
        localStorage.setItem('isLoggedIn','false')
        localStorage.setItem('jwtToken','')
        localStorage.setItem('type','')
        document.location.href='/'
    }

      // handleClick = event => {
      //   this.setState({ anchorEl: event.currentTarget });
      // };
    
      // handleClose = () => {
      //   this.setState({ anchorEl: null });
      // };
      
    //   setRoute = (options) => {
    //       this.setState({option:options})
    //     if(options === "Home")
    //       document.location.href="/home"
    //     else if(options === "Electronic Journal")
    //       document.location.href='/journal'
    //   }

    //   setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }
    //   renderRedirectHome = () => {
    //     if (this.state.redirect) {
    //       return <Redirect to='/home' />
    //     }
    //   }
    //   renderRedirectAbout = () => {
    //     if (this.state.redirect) {
    //       return <Redirect to='/about' />
    //     }
    //   }
      
// render(){ 

//     const { anchorEl } = this.state;
//     const open = Boolean(anchorEl);
//        return(
//            <div>
//         <IconButton
//             className ="fas fa-align-justify" 
//             aria-owns={open ? 'long-menu' : undefined}
//             aria-haspopup="true"
//             onClick={this.handleClick}
//         >
//         </IconButton>
//         <Menu
//           id="long-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={this.handleClose}
//           PaperProps={{
//             style: {
//               width: 200,
//             },
//           }}

          
//         >
       
//          {/* selected={option === 'About Us'}
//                selected={option === 'My Page'} href='/profile'
//                selected={option === 'Language'} href='/profile'>  */}
//           {/* {options.map(option => (
//             <MenuItem key={option} selected={option ==='Home'} 
//                selected={option === 'Electronic Journal'} >
//                {option} 
//                </MenuItem>           
//           ))} */}
//           <MenuItem ><a href="/"></a> Home</MenuItem>
//           <MenuItem ><a href="/journal"></a>Electronic Journal</MenuItem>
//            </Menu>
//            </div>
      
//     )
        render()
       {
            
          
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
    style={{backgroundColor:"#123456", height:"100%" , position:"fixed"}}
>
    <SideNav.Toggle />
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