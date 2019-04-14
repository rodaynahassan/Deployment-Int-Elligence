import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React,{ Component } from 'react';
import NavLink from 'react-bootstrap/NavLink';
import Journal from './Journal1.png'
class Side extends Component{
render(){ 
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
            
            
            {/* <NavItem eventKey="charts/linechart">
                <NavLink>
                    Line Chart
                </NavLink>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem> */}
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
    </SideNav.Nav>
</SideNav>
)
}
}

export default Side