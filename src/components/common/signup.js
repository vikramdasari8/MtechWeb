import React, { Component } from "react";
import "../styles/style.css";
import{Link} from"react-router-dom";

export default class Signupscreen extends Component {
    render() {
        return (
            <div className="signupbg">
                <div className="container">
                    <div className="row contentpdng">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-sm-5 offset-md-4">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-heading">
                                                <h2 className="text-center">SIGN UP</h2>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <div className="form-group formrgn1">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-user facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="text" className="form-control" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group formrgn1">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-user facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="text" className="form-control" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group formrgn1">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-envelope facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="text" className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group formrgn1">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-key facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="password" className="form-control " placeholder="Password" />
                                                        </div>

                                                    </div>
                                                    <div className="form-group text-center">
                                                        <button type="submit" className="btn btn-lg btn-primary btn-block mb-1 btnshadow" onClick={this.btnLoginClick}>
                                                            SIGN UP
</button>
                                                        <div className="floatl cpadding1"> Have alrady an account? <Link to="/login" className="btn btn-link">Login Here</Link></div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}