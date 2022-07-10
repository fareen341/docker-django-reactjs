import React from 'react'

export const SearchBar = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center m-3">
                    <div className="col-lg-3">
                        {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb"> */}
                            <ol className="breadcrumb bg-light">
                                <li className="breadcrumb-item"><a className="text-decoration-none text-success" href="">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">All product</li>
                            </ol>
                        {/* </nav> */}
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="col-auto">

                                    <input type="text" className="form-control" id="myInput" placeholder="Search" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <select className="form-select" aria-label="Default select example">
                                    {/* <option selected>Sort By</option> */}
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>    
    )
}
