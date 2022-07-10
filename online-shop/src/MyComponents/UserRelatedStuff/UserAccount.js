import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRecords } from '../../Features/getProduct';

export const UserAccount = () => {

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);
  // let uname="admin"
  // let pswd="admin"

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/userapi/")
//         .then((response) => {
//             dispatch(setRecords(response.data));
//             // console.log("api call", response.data);
//             // response.data.map((i) =>console.log(`uname:${i.username}, pswd:${i.password}`))
//             const res=response.data.filter((x) => x.username==uname && x.password==pswd)
//             // console.log("res=",res)
//         })
//         .catch(error => {
//             console.log("error:", error)
//         });
// }, []); 
  return (
    
    <div>
      hello
      {/* <p>Name: {user.username}</p>
      <p>pswd: {user.password}</p>  */}
    </div>
  )
}
