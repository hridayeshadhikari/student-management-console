import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 mt-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Student Portal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className="nav-item" to={"/view-all-students"}>
                                <a className="nav-link active" aria-current="page" >View All Students</a>
                            </Link>
                            <Link className="nav-item" to={"/add-student"}>
                                <a className="nav-link" >Add New Student</a>
                            </Link>
                           
                          
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
