


import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user) => dispatch => {
    axios.post('http://localhost:5000/routes/api/users/register', user)
        //.then(res => history.push('/login'))
        .catch(err => console.log(err))
        .catch(err => {alert(err.response.data.errmsg||err.response.data)
         console.log(err.response)})


}

export const registerLR = (user) => dispatch => {
    if(user.userType==="Lawyer"){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    axios.post('http://localhost:5000/routes/api/admins/registerL',user,{headers: { "Authorization": localStorage.getItem('jwtToken') }} )
        //.then(res => history.push('/login'))
        .catch(err => alert(err.response.data.errmsg||err.response.data))
    }

    if(user.userType==="Reviewer"){
        axios.post('http://localhost:5000/routes/api/admins/registerR', user,{headers: { "Authorization": localStorage.getItem('jwtToken') }})
        .then(res => console.log(res))
        .catch(err => {alert(err.response.data.errmsg||err.response.data)
        console.log(err.response)})
    }    


}







export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:5000/routes/api/users/login', user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            const { type } = res.data
            localStorage.setItem('type', type)
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            console.log(res.data)
        })
        .catch(err => console.log(err)
            // {
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: err.response.data
            // });
            //}
        )
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}