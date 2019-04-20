import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import trans from '../translations/companiesTranslation'
import '../../App.scss'

class FlippingCard extends Component{
render() {

  trans.setLanguage(this.props.lang)
	return(
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: "100%" , height: '430px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
       borderStyle: 'solid',
       borderWidth:'5px',
       backgroundSize: "486px 400px"
      }}
    >
    <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
   
     <h1 style = {{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'100px'}}>{this.props.company.companyName} </h1><br/><br/>
      <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'30px', color:'#2e5a7c'}}>{trans.hover}</h5> 
      </div>
    </FrontSide>
    <BackSide
       style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px'}}>
        <div style={{textAlign:'center', fontSize:'20px'}}>
        <h3> Name In English :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyNameInEnglish}</span> </h3> 
           <h5> Governorate :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyGovernorate}</span> </h5>
           <h5> City :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyCity}</span> </h5>
           <h5> Address :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyAddress}</span> </h5>
           <h5> Telephone :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyTelephone}</span> </h5>
           <h5> Fax :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.companyFax}</span> </h5>
           <h5> Currency :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.currency}</span> </h5>
           <h5> Equity Capital :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.equityCapital}</span> </h5>
           <h5> Type :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.type}</span> </h5>
           <h5> creation Date :<span style ={{textAlign:'center'}}></span> <span style = {{ color:'#2e5a7c'}}>{this.props.company.creationDate}</span> </h5>
         </div>
    </BackSide>
  </Flippy>
)
}
}

export default FlippingCard
