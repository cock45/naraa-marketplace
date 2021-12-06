import { REGISTER_SUCCESS } from '../shared/actionTypes';
import { Dispatch } from 'redux';
import IUser from '../shared/IUser';
// import swal from 'sweetalert';

export const onRegister = (data: IUser) => {
  // return async (dispatch:any) => {
  //   const body = {
  //     email, username, address
  //   };
  //   try {
  //     const res = await authAxios.post("/signUp", body);
  //     if (res.data.success == false) {
  //       alert("Sorry!" + res.data.msg);
  //     }
  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: {
  //         user: res.data.user,
  //       },
  //     });
  //   } catch (err) {
  //     console.log("error!!!!", err);
  //   }
  // };
  console.log('body', data);
  return (dispatch: Dispatch) => {
    fetch('http://dev.narra.io:3001/signUp', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(user => {
        console.log('user', user);
        if (!user || user.success == false) {
          alert('Register Failed');
        } else {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              user: user.user,
            },
          });
          alert('Register Success');
        }
      });
  };
};
