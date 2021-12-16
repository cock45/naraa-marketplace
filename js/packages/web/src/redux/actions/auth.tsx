import {
  REGISTER_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../shared/actionTypes';
import { Dispatch } from 'redux';
import IUser from '../shared/IUser';
import IAddress from '../shared/IAddress';
// import swal from 'sweetalert';

// const dotenv = require('dotenv');
// dotenv.config();

export const onRegister = (data: IUser) => {
  return (dispatch: Dispatch) => {
    fetch('https://dev-api.naraa.io/signUp', {
    // fetch(`${process.env.REACT_APP_API_SERVER_LOCAL}`, {
    // fetch('http://localhost:3001/signUp', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(user => {
        if (!user || user.success == false) {
          alert('Register Failed');
        } else {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              user: user.user,
            },
          });
        }
      });
  };
};

export const onGetUser = (address: IAddress) => {
  console.log('IAddress => ', address);
  return (dispatch: Dispatch) => {
    // fetch(`${process.env.REACT_APP_API_SERVER_LOCAL}` + '/getUser', {
    fetch('https://dev-api.naraa.io/getUser', {
    // fetch('http://localhost:3001/getUser', {
    // fetch(`${process.env.APP_API_SERVER}` + '/getUser', {
      method: 'POST',
      body: JSON.stringify(address),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(registeredUser => {
        if (!registeredUser || registeredUser.success == false) {
        } else {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: {
              user: registeredUser.user,
            },
          });
        }
      });
  };
};
