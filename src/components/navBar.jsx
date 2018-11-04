import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

class navBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-toggleable-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/">React Web Site</Link>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default navBar;