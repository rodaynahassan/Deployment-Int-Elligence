import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import FrontCard from '../layout/Card2.jpg'
import trans from '../translations/companiesTranslation'

class FlippingCard extends Component{
render() {

  trans.setLanguage(this.props.lang)
	return(
  <Flippy
    flipOnHover={true} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: "486px" , height: '400px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
       borderStyle: 'solid',
       borderWidth:'5px',
       backgroundImage: "url(" +  FrontCard  + ")",
       backgroundSize: "486px 400px"
      }}
    >
    <div style={{textAlign:'center' ,fontSize:'50px' , textShadow:'-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white'}}>
   
      {this.props.company.companyName} <br/> <br/><br/> <br/> 
      <h5 style={{textShadow:'-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}>{trans.hover}</h5> 
      </div>
    </FrontSide>
    <BackSide
       style={{ backgroundColor: '#e8e6da', borderStyle: 'solid',borderWidth:'5px'}}>
        <div style={{textAlign:'center'}}>
                {trans.nameInEnglish} : {this.props.company.companyNameInEnglish} <br/>
                {trans.governorate} : {this.props.company.companyGovernorate} <br/>
                {trans.city} : {this.props.company.companyCity} <br/>
                {trans.address}: {this.props.company.companyAddress} <br/>
                {trans.telephone} : {this.props.company.companyTelephone} <br/>
                {trans.fax} : {this.props.company.companyFax} <br/>
                {trans.currency} : {this.props.company.currency} <br/>
                {trans.capital} : {this.props.company.equityCapital}<br/>
                {trans.type} : {this.props.company.type}<br/>
                {trans.date} : {this.props.company.creationDate}<br/>
         </div>
    </BackSide>
  </Flippy>
)
}
}

export default FlippingCard
