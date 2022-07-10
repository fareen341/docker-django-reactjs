import React from 'react'

export const CollectionHeader = () => {
    return (
        <div>
            <div className="container-fluid my-5 text-center">
                <h1 style={{ color: "black" }}>Enjoy your discount on sale items</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                </svg>
            </div>

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-4">
                        <div className="container">
                            <a href="#"> <div className="card text-white myimg">
                                <img src="static/images/a3.jpg" className="card-img" alt="..." height="400px" width="100%" />
                                <div className="card-img-overlay" style={{ background: "rgba(25, 25, 25, .3)" }}>
                                    <h1 className="card-title mt-5">All products on sale</h1>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="container">
                            <a href="#"> <div className="card text-white myimg">
                                <img src="static/images/card1.jpg" className="card-img" alt="..." height="400px" width="100%" />
                                <div className="card-img-overlay" style={{ background: "rgba(25, 25, 25, .3)" }}>
                                    <h1 className="card-title mt-5">20% off on fossial brand</h1>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
