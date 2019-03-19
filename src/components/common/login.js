import React, { Component } from "react";
import "../styles/style.css";
import {Link} from "react-router-dom";

export default class Loginscreen extends Component {
    render() {
        return (
            <div className="loginbg">
                <div className="container">
                    <div className="row contentpdng">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-sm-5 offset-md-4">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-heading">
                                                <h2 className="text-center">LOG IN</h2>
                                            </div>
                                            <div className="modal-body">
                                                <div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-user facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="text" className="form-control" placeholder="User Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon">
                                                                <span className="fa fa-key facolor" aria-hidden="true" />
                                                            </span>
                                                            <input type="password" className="form-control " placeholder="Password" />
                                                        </div>
                                                        <div className="form-group text-center">
                                                            <div className="floatl cpadding">

                                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                            </div>
                                                            <div className="floatl cpadding1"> Remember me</div>
                                                            <div className="floatr">
                                                                <a href="#top" className="btn btn-link"> Forgot Password</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group text-center btnmrgn">
                                                        <button type="submit" className="btn btn-lg btn-primary btn-block mb-1 btnshadow" onClick={this.btnLoginClick}>
                                                            LOG IN
</button>
                                                        <div className="floatl cpadding1"> Don't have an account? <Link to="/signup" className="btn btn-link">Create account</Link></div>

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