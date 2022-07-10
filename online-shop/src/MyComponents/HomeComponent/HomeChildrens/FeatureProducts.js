import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRecords } from '../../../Features/getProduct';
import { useNavigate } from 'react-router-dom'

export const FeatureProducts = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getProduct.value);

    useEffect(() => {
        axios.get(process.env.REACT_APP_PRODUCT_API)
            .then((response) => {
                dispatch(setRecords(response.data));
                let x=response.data
                console.log("api call1",response.data)
                console.log("api call",x[2].id);
            })
            .catch(error => {
                console.log("error:", error)
            });
    }, []);       //empty array for it to render only once

    return (
        <div>
            <div className="container-fluid my-5 text-center">
                <h1>Featured Product</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                </svg>
            </div>


            <div className="container">
                <div className="row" >
                    {
                        user.map((curElem) => {
                            const { id, product_name, regular_price, product_image, sale_price } = curElem
                            let x=id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                            return (

                                <div className="col-lg-2 mb-5 productItem item" data-category="" key={id}>
                                    <a href="" style={{ textDecoration: "none", color: "black" }}><img src={product_image} className="card-img" alt="..." height="250px" width="100%" style={{objectFit:"cover"}} />
                                        <p className="text-center lead mt-4 mb-3">{product_name}</p></a>
                                    {/* <p className="text-center lead"><del><b className="me-3">₹{regular_price}</b></del> <b className="text-danger"></b></p> */}
                                    <p className="text-center lead">Only at <b>₹{regular_price}</b></p>
                                    <a href="" style={{ textDecoration: "none", color: "black" }}> <button onClick={()=>{navigate("/product/"+x);}} className="ms-3 text-light p-2" style={{ width: "100%", border: "none", backgroundColor: "black" }}>Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg></button></a>
                                </div>
                            )
                        })
                    }
                </div>


            </div>
            <div className="text-center p-3"><button className="btn" style={{ border: "1px solid black", color: "white" }}><a href="/" style={{ textDecoration: "none", color: "black" }}>Browse All Watches</a></button></div>
        </div>



    )
}
