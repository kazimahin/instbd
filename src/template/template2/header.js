import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <div>
                <header >
                    {/*Navbar*/}
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        <strong>Navbar2</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*Links*/}
                        <ul className="navbar-nav mr-auto smooth-scroll">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Home
                                <span className="sr-only">(current)</span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/login" data-offset={100}>Login</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/regester" data-offset={100}>regester</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#courses" data-offset={100}>Courses</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#events" data-offset={100}>Events</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#testimonials" data-offset={100}>Opinions</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#modal-contact">Contact</a>
                            </li>
                        </ul>
                        {/*Social Icons*/}
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                            <a className="nav-link">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">
                                <i className="fab fa-instagram" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    {/*Navbar*/}
                    {/* Intro Section */}
                  
                </header>
            </div>
        );
    }
}

export default header;