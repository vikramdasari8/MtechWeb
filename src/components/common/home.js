import React, { Component } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default class Homescreen extends Component {
    render() {
        return (
            <div>
                <div className="">
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
                    <div id="carouselExampleIndicators" className="carousel slide bannerbr" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 logoicon2" src="../../assets/banner1.jpg" alt="logo"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="bannertext35">Lorem Ipsum is simply dummy text of the printing</h5>
                                    <p className="bannertext20">Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../assets/banner2.jpg" alt="Second slide"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="bannertext35g">Lorem Ipsum is simply dummy text</h5>
                                    <p className="bannertext20">Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../assets/banner3.jpg" alt="Third slide"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="bannertext35b">Lorem Ipsum is simply dummy text of <br></br>the printing and typesetting industry.</h5>
                                    <p className="bannertext20">Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="container">
                        <h2 className="hdrfont">WELCOME TO <span className="intelfont">INTEL<span className="ufont">U</span>SCAN</span></h2>
                        <p className="pargraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries,</p>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row paddingtop30">
                        <div className="col-md-3 col-xs-6 col_1"><img src="../../assets/icon1.png" alt="logoIcon1" className="logoicon"></img>
                            <div className="heading_1">Lorem Ipsum is simply</div>
                            <div> <span className="paragrapg_hdr">Learn from industry experts
                who are passionate about teaching.</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col_1"><img src="../../assets/icon2.png" alt="logoIcon2" className="logoicon"></img>
                            <div className="heading_1">Lorem Ipsum is simply</div>
                            <div> <span className="paragrapg_hdr">Learn from industry experts
                who are passionate about teaching.</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col_1"><img src="../../assets/icon3.png" alt="logoIcon3" className="logoicon"></img>
                            <div className="heading_1">Lorem Ipsum is simply</div>
                            <div> <span className="paragrapg_hdr">Learn from industry experts
                who are passionate about teaching.</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col_1"><img src="../../assets/icon4.png" alt="logoIcon4" className="logoicon"></img>
                            <div className="heading_1">Lorem Ipsum is simply</div>
                            <div> <span className="paragrapg_hdr">Learn from industry experts
                who are passionate about teaching.</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row div2">
                        <div className="col-md-4">
                            <div className="heading_2">HERBAL</div>
                            <div className="heading_3">MEDICINE</div>
                            <p className="pargraph2">Lorem Ipsum is simply dummy text of the printing.</p>
                            <div className="getinbutton"><button type="button" className="GetInButton">GET IN TOUCH</button></div>
                        </div>
                        <div className="col-md-8">
                            <img src="../../assets/image1.png" alt="image1" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row div3">
                        <div className="col-md-6">
                            <img src="../../assets/image2.png" alt="image2" className="img-fluid"></img>
                        </div>
                        <div className="col-md-5">
                            <div className="heading_4">Lorem Ipsum is simply </div>
                            <p className="pargraph3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row Testimonials">

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <h2 className="testhdr">Testimonials</h2>

                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>

                                        <div className="carousel-inner">
                                            <div className="item carousel-item active">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/1.jpg" alt="image3" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>Paula Wilson</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        when an unknown printer took a galley of type. </p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/2.jpg" alt="image4" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>Antonio Moreno</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item carousel-item">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        when an unknown printer. </p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/3.jpg" alt="image5" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>Michael Holz</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        when an unknown printer. </p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/4.jpg" alt="image6" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>Mary Saveley</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item carousel-item">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        when an unknown printer. </p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/5.jpg" alt="image7" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>Martin Sommer</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="testimonial">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        when an unknown printer. </p>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-left d-flex mr-3">
                                                                <img src="../../assets/6.jpg" alt="image8" className=""></img>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="overview">
                                                                    <div className="name"><b>John Williams</b></div>
                                                                    <div className="details">Lorem ipsum dolor</div>
                                                                    <div className="star-rating">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                            <i className="fa fa-chevron-left"></i>
                                        </a>
                                        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

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