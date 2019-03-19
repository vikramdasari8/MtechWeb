import React, { Component } from "react";
import "../styles/style.css";
import {Link} from "react-router-dom";

export default class Aboutscreen extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="col-md-12">
                        <div className="row logoDiv">
                            <header>
                                <div className="clearfix">
                                    <h1 id="logo"><img src="../../assets/logo1.png" alt="logo1"></img> INTEL<span className="ucolor">U</span>SCAN</h1>
                                    <nav>
                                        <Link to="/">HOME</Link>
                                        <Link to="/about">ABOUT</Link>
                                        <Link to="/products">PRODUCTS</Link>
                                        <Link to="/services">SERVICES</Link>
                                        <Link to="/contact">CONTACT US</Link>
                                        <Link to="/login" className="logincolor">LOGIN</Link>
                                    </nav>
                                </div>
                            </header>
                        </div>
                    </div>
                   

                </div>
                <div className="col-md-12 aboutcnt">
                    <div className="container ">
                 hiiiiii
                    </div>
                </div>


                <div className="col-md-12">
                    <div className="row footerdiv">
                        <div className="col-md-12">
                            Copyright  ©2019 INTELUSCAN All Rights Reserved
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}