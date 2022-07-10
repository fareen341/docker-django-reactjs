import React from 'react'
const imgStyle={
    background: "rgba(25, 25, 25, .3)"
}

export const HomeProduct = () => {
    return (
        <div>
            <div className="container-fluid my-5 text-center">
                <h1 style={{color:"black"}}>Products</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                </svg>
            </div>
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card  text-white">
                                <img src="static/images/card2.jpg" className="card-img" alt="..." height="400px" width="100%" style={{bjectFit: "cover"}} />
                                <div className="card-img-overlay" style={imgStyle}>
                                    <h1 className="card-title mt-5">20% off on brands</h1>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href="/" style={{textDecoration:"none"}}><button type="button" className="btn btnstyle">Shop Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card text-white">
                                <img src="static/images/w6.jpg" className="card-img" alt="..." height="400px" width="100%" style={{objectFit: "cover"}} />
                                <div className="card-img-overlay" style={imgStyle}>
                                    <h1 className="card-title mt-5">Latest Women Watch</h1>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href="/" style={{textDecoration:"none"}}><button type="button" className="btn btnstyle">Shop Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="container">
                            <div className="card text-white">
                                <img src="static/images/background-img2.jpg" className="card-img" alt="..." height="400px" width="100%" style={{objectFit: "cover"}} />
                                <div className="card-img-overlay" style={imgStyle}>
                                    <h1 className="card-title mt-5">Latest Men Watch</h1>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href="/" style={{textDecoration:"none"}}><button type="button" className="btn btnstyle">Shop Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
