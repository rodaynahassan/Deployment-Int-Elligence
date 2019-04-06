import  React, { Component } from 'react';

class GetAllCompanies extends Component {
   getStyle= ()=>{
       return {
           background:'#050b0f',
           color: '#4B0082',
           padding:'10px',
           borderBottom:'1px #ccc dotted',
           textDecoration:'none'
        

       }
   }
    render()
    {
        return (
            // <div 
            // style= {this.getStyle()}>
            //  >
            <tr>
                <td>{this.props.company.companyName} </td>
                <td>{this.props.company.companyNameInEnglish} </td>
                <td>{this.props.company.companyGovernorate} </td>
                <td>{this.props.company.companyCity} </td>
                <td>{this.props.company.companyAddress} </td>
                <td>{this.props.company.companyTelephone} </td>
                <td>{this.props.company.companyFax} </td>
                <td>{this.props.company.currency} </td>
                <td>{this.props.company.equityCapital}</td>
                <td>{this.props.company.type}</td>
                <td>{this.props.company.creationDate}</td>

            </tr>    
            //</div>
        )   
        
    }
}
export default GetAllCompanies