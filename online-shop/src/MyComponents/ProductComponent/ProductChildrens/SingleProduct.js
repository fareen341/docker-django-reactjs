import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { setRecords } from '../../../Features/getProduct';

export const SingleProduct = () => {
    let { id } = useParams();
    let new_id = { id };
    console.log(new_id.id);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getProduct.value);

    useEffect(() => {
        axios.get(process.env.REACT_APP_PRODUCT_API + new_id.id + '/')
            .then((response) => {
                dispatch(setRecords(response.data));
                console.log("api call");
                console.log("response=========>",response.data)
            })
            .catch(error => {
                console.log("error:", error)
            });
    }, []);       //empty array for it to render only once

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-4 pt-5">
                        <div className="container2">
                            <div className="side_view">
                                <img src={user.product_image} onClick="change(this.src)" width="100%" height="100px" />
                                <img src={user.product_img1} onClick="change(this.src)" />
                                <img src={user.product_img2} onClick="change(this.src)" />
                                <img src={user.product_img3} onClick="change(this.src)" />
                            </div>
                            <div className="main_view">
                                <img src={user.product_image}  id="main" alt="IMAGE" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-5">
                        <p className="display-6">{user.product_group_name}</p>
                        <p className="lead">₹{user.regular_price}</p>
                        <p>{user.product_desc}</p>
                        <p>Brand: {user.watch_brand}</p>
                        <div className="container">
                            <div className="row">
                                <p className="lead">Color Availble</p>
                                <div className="col-lg-2 p-1">
                                    <a href="/product/1" className="ms-1" style={{textDecoration:"none", color:"black"}}><img src="/media/images/mi-band-4-pic1.jpg" alt="..." width="40px" height="40px" /><span className="ms-2">black</span></a>
                                </div>
                            </div>
                        </div>
                        <a className="addtocart" id="1" href="/login" style={{textDecoration:"none"}}><button style={{width:"100%", height:"40px", color:"white", backgroundColor:"black", border:"none"}}>Add to cart</button></a>
                    </div>
                </div>
                <hr />
            </div>
        </div>
)
}
