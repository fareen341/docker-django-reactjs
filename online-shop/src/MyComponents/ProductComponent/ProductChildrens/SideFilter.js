import React from 'react'
import './sidebars.css'

export const SideFilter = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-md-end">
                    <div className="col-lg-12" >
                        <div className="flex-shrink-0 p-3 bg-white" style={{width: "280px"}}>
                            <a href="#" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 14">
                                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="fs-5 fw-semibold ms-3">Filter</span>
                            </a>
                            <ul className="list-unstyled ps-0">
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed mybtn" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                        Gender
                                    </button>
                                    <div className="collapse show" id="home-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <div className="form-check ms-4">
                                                <input className="form-check-input" type="checkbox" id="male" value="male" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Man
                                                    </label>
                                            </div>
                                            <div className="form-check ms-4">
                                                <input className="form-check-input" type="checkbox" id="female" value="female" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Women
                                                    </label>
                                            </div>
                                            <div className="form-check ms-4">
                                                <input className="form-check-input" type="checkbox" id="band" value="band" />
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Bands
                                                    </label>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed mybtn" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                        Brands Available
                                    </button>
                                    <div className="collapse" id="dashboard-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                            <div className="form-check ms-4">
                                            </div>

                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed mybtn" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                        Sizes Available
                                    </button>
                                    <div className="collapse" id="orders-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <div className="form-check ms-4">
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="border-top my-3"></li>
                                <li className="mb-1">
                                    <button className="btn btn-toggle align-items-center rounded collapsed mybtn" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                        Colors Available
                                    </button>
                                    <div className="collapse" id="account-collapse">
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <div className="form-check ms-4">
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
)
}
