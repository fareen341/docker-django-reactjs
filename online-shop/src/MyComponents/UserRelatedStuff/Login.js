import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRecords } from '../../Features/getProduct';
import { login, logout } from '../../Features/user';
import { UserAccount } from './UserAccount';
import { updateUsers } from '../../Features/getusers';
import { useNavigate } from 'react-router-dom';
import { setLoginUser } from '../../Features/userLoggedIn';

export const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // let derivedKey = PBKDF2.pbkdf2Sync('password', 'salt', 1, 32, 'sha512')
  const user = useSelector((state) => state.user.value);
  const getloginusers = useSelector((state) => state.getusers.value);
  const userstate = useSelector((state) => state.userLoggedIn.value);

  //we need another state for this state
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    password: ""
  });

  const getitems = localStorage.getItem('userdetail');
  let x=JSON.parse(getitems)
  console.log("getitems==============================================================>",x)
  console.log("type:",typeof(x))

  useEffect(() => {
    axios.get(process.env.REACT_APP_USER )
      .then((response) => {
        dispatch(updateUsers(response.data));
        console.log("api call", response.data);
      })
      .catch(error => {
        console.log("error:", error)
      });
  }, []);
  
  function resolve() {    
    const result = getloginusers.filter((x) => x.username == userRegistration.username && x.password == userRegistration.password)
    console.log("result is===========", result)
    if(result.length != 0){      
      // let a={"username":userRegistration.username, "password": userRegistration.password, "isAuthenticate":true}
      localStorage.setItem('userdetail', true);
      // setLoginUser("true")
      navigate('/account')
    }else{    
      // dispatch(setLoginUser("true"));
      alert("invalid login credential")
    }
  }

  function counter(){
    console.log("counter called")
    dispatch(setLoginUser(userstate+1));
    
  }


  const handleInput = (e) => {
    console.log("handle called")
    const names = e.target.name;
    const values = e.target.value;
    console.log(names);
    console.log(values);
    setUserRegistration({ ...userRegistration, [names]: values })
  }

  




  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <p className="lead text-center">Sign in Here</p>
          <p className="text-center"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#A32CC4" className="bi bi-dash-lg" viewBox="0 0 16 16">
            <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
          </svg></p>
          <div className="col-lg-4">
            <p className=" text-center">
              <a className="navbar-brand" href="" style={{ color: "black" }}>
                <i>Classic Watches</i>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" className="bi bi-watch" viewBox="0 0 14 14">
                  <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                  <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
                </svg>
              </a>
            </p>
            <form action="" method="">
              {/* username */}
              <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label" >Username</label>
                <input type="text" className="form-control" name="username" id="username" value={userRegistration.username} onChange={handleInput} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                <input type="password" className="form-control" name="password" id="password" value={userRegistration.password} onChange={handleInput} />
              </div>
              
            </form>


            <p className="text-end mt-1"><a href="" className="text-decoration-none">Forgot password?</a></p>
            <p className="my-3">
              <button className="btn btn-dark" style={{ width: "100%" }}
                onClick={() => {
                  dispatch(login({
                    username: userRegistration.username,
                    password: userRegistration.password,
                  }));

                  resolve();
                }
                }
              >
                Sign in
              </button>
              {/* <button onClick={counter}>counter</button> */}
            </p>
            <p>Don't have an account? <a href="" className="text-decoration-none">Sign up here</a></p>
            <p className="text-center"><a href="" className="text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></a> Go back</p>

            <hr />
            <p className="text-center">© 2021 Company, Inc. All rights reserved.</p>

          </div>
        </div>
      </div>

    </div>
  )
}


// getloginusers.map((x)=>{
//   if(x.username == userRegistration.username && x.password == userRegistration.password){
//     navigate("/account");
//   }
//   else{
//     alert("invalid uname & pwd")
//   }
  
// })