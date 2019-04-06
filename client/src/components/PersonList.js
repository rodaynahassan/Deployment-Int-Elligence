import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
   
    constructor(props) {
        super(props)
        this.state = {
            admins: []
        }
    }

componentDidMount(){
    axios.get('http://localhost:5000/routes/api/admins').then (res=> {
        // console.log(res.data.data)
           this.setState({admins:res.data.data})
        });     
}
render(){
    return (
        <div>
        <h1>hello</h1>
    <ul>  
        {this.state.admins.map(x => <li key={x._id}>{x.name} </li>)}
    </ul>
     </div>
    )
}
}
