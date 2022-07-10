import './App.css';
import { Home } from './MyComponents/HomeComponent/Home';
import { Footer } from './MyComponents/HomeComponent/HomeChildrens/Footer';
import { Header } from './MyComponents/HomeComponent/HomeChildrens/Header';

import { Contact } from './MyComponents/ContactComponent/Contact';
import { About } from './MyComponents/AboutComponent/About';
import { Product } from './MyComponents/ProductComponent/Product';
import { Collection } from './MyComponents/CollectionComponent/Collection';
import { Help } from './MyComponents/Extra/Help';
import { PageNotFound } from './MyComponents/Extra/PageNotFound';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { Login } from './MyComponents/UserRelatedStuff/Login';
import { Register } from './MyComponents/UserRelatedStuff/Register';
import { UserAccount } from './MyComponents/UserRelatedStuff/UserAccount';
// import { useLocation } from 'react-router-dom'
import './MyComponents/publicStyle.css'
import { SingleProduct } from './MyComponents/ProductComponent/ProductChildrens/SingleProduct';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setLoginUser } from './Features/userLoggedIn';
import { useDispatch } from 'react-redux';
import Protected from './MyComponents/Protected';


function App() {
  const dispatch = useDispatch();
  const userstate = useSelector((state) => state.userLoggedIn.value);
  const [userstateuser, setUser] = useState(false);
  useEffect(() => {
    // console.log("user is==================>",user)
    console.log("in useeffetc")
    if (localStorage.getItem('userdetail')=="true") {
      // let x = localStorage.getItem('userdetail')
      // let p = JSON.parse(x)
      // console.log("user state", p)
      dispatch(setLoginUser("true"));
      // setUser(p)
    } else {
      dispatch(setLoginUser("false"));
    }
    

  })
  function requireAuth() {
    console.log("localStorage.getItem('userdetails')", localStorage.getItem('userdetail') == "true")
    if (localStorage.getItem('userdetail')=="true") {
      // let x = localStorage.getItem('userdetail')
      // let p = JSON.parse(x)
      // console.log("user state", p)
      dispatch(setLoginUser("true"));
      // setUser(p)
    } else {
      dispatch(setLoginUser("false"));
    }

  }


  // console.log("user=========================================>",user)
  return (


    <div className="App">
     

      
      <Router>
      <Header />
      {/* <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help />} />

          {/* {userstate == 'true' ? <Route path="/account" element={<UserAccount />} /> : <Route path="/login" element={<Login />} />} */}


          <Route
            path="/account"
            element={
              <Protected isLoggedIn={userstate}>
                <UserAccount />
              </Protected>
            }
          />
          {/* <Route path="/account" component={UserAccount} onEnter={requireAuth()}/> */}

          {/* <Route path="/account" element={<UserAccount onEnter={requireAuth}/>} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
          {/* <Route path="*" element={<Navigate to={userstate? "/account" : "/login"} />} /> */}
        </Routes>
      </Router>
      <Footer />

      {/* <Router>
      {location.pathname==="/login"?null:<Header/>}
      </Router> */}

    </div>
  );
}

export default App;
