import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "./Sign.css";
import {Link} from 'react-router-dom';

function SignIn() {
    return (
        <div>
            <div className="Container contain" >
                <div className="Row">
                    <div className="col-6 form ">
                        <h1>Sign In</h1>
                        <form>
                            <div className="txtField">
                            <input type="text" required ></input>
                            <span></span>
                            <label>Username</label>
                        
                            </div>
                            <div className="txtField">
                            <input type="password" required ></input>
                            <span></span>
                            <label>Password</label>
                        
                            </div>
                            <input type="checkbox"/>
                            <p className="d-inline">Remember me?</p>
                            <button type="submit" ><Link to="/dashboard/home">Login</Link></button>
                        </form>
                    </div> 
                    <h1 className=" tensor">TENSORS</h1>    
                </div>
            </div>
        </div>
    )
}

export default SignIn
