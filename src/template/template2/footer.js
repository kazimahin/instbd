import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer text-center text-md-left mdb-color darken-3">
                {/*Footer Links*/}
                <div className="container-fluid">
                    {/*First row*/}
                    <div className="row " data-wow-delay="0.2s">
                    {/*First column*/}
                    <div className="col-md-12 text-center mb-3 mt-3">
                        {/*Icon*/}
                        <i className="fas fa-graduation-cap fa-4x orange-text" />
                        {/*Title*/}
                        <h2 className="mt-3 mb-3">Join Us</h2>
                        {/*Description*/}
                        <p className="white-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et
                        dolore magna aliqua.</p>
                        {/*Reservation button*/}
                        <a href="#!" className="btn btn-warning">Appliction</a>
                        <a href="#!" className="btn btn-info">Contact</a>
                    </div>
                    {/*First column*/}
                    <hr className="w-100 mt-4 mb-5" />
                    </div>
                    {/*First row*/}
                    <div className="container mb-1">
                    {/*Second row*/}
                    <div className="row">
                        {/*First column*/}
                        <div className="col-xl-4 col-lg-4 pt-1 pb-1">
                        {/*About*/}
                        <h5 className="text-uppercase mb-3 font-weight-bold">ABOUT MATERIAL DESIGN</h5>
                        <p>Material Design (codenamed Quantum Paper) is a design language developed by Google.</p>
                        <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS,
                            and JS framework - Bootstrap.</p>
                        {/*About*/}
                        <div className="footer-socials mt-4">
                            {/*Facebook*/}
                            <a type="button" className="btn-floating btn-blue-2 ">
                            <i className="fab fa-facebook-f" />
                            </a>
                            {/*Dribbble*/}
                            <a type="button" className="btn-floating btn-blue-2 ">
                            <i className="fab fa-dribbble" />
                            </a>
                            {/*Twitter*/}
                            <a type="button" className="btn-floating btn-blue-2 ">
                            <i className="fab fa-twitter" />
                            </a>
                            {/*Google +*/}
                            <a type="button" className="btn-floating btn-blue-2 ">
                            <i className="fab fa-google-plus-g" />
                            </a>
                        </div>
                        </div>
                        {/*First column*/}
                        <hr className="w-100 clearfix d-lg-none" />
                        {/*Second column*/}
                        <div className="col-xl-3 ml-lg-auto col-lg-4 col-md-6 mt-1 mb-1">
                        {/*Search*/}
                        <h5 className="text-uppercase mb-3 font-weight-bold">Search something</h5>
                        <ul className="footer-search list-unstyled">
                            <li>
                            <form className="search-form" role="search">
                                <div className="md-form">
                                <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form>
                            </li>
                        </ul>
                        {/*Info*/}
                        <p>
                            <i className="fas fa-home pr-1" /> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope pr-1" /> info@example.com</p>
                        <p>
                            <i className="fas fa-phone pr-1" /> + 01 234 567 88</p>
                        <p>
                            <i className="fas fa-print pr-1" /> + 01 234 567 89</p>
                        </div>
                        {/*Second column*/}
                        <hr className="w-100 clearfix d-md-none" />
                        {/*Third column*/}
                        <div className="col-xl-3 ml-lg-auto col-lg-4 col-md-6 mt-1 mb-1">
                        {/*Contact*/}
                        <h5 className="text-uppercase mb-3 font-weight-bold">Recent news</h5>
                        <ul className="footer-posts list-unstyled">
                            <li>
                            <a>Ut enim ad minim veniam nostrud.</a>
                            <span>
                                <p className="grey-text">28 july 2016</p>
                            </span>
                            </li>
                            <li>
                            <a>Duis aute dolor in reprehenderit.</a>
                            <span>
                                <p className="grey-text">27 july 2016</p>
                            </span>
                            </li>
                            <li>
                            <a>Excepteur sint occaecat cupidatat.</a>
                            <span>
                                <p className="grey-text">26 july 2016</p>
                            </span>
                            </li>
                            <li>
                            <a>Sed perspiciatis unde omnis iste.</a>
                            <span>
                                <p className="grey-text">25 july 2016</p>
                            </span>
                            </li>
                        </ul>
                        </div>
                        {/*Third column*/}
                    </div>
                    {/*Second row*/}
                    </div>
                </div>
                {/*Footer Links*/}
                {/*Copyright*/}
                <div className="footer-copyright py-3 text-center">
                    <div className="container-fluid">
                    © 2019 Copyright: <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> MDBootstrap.com </a>
                    </div>
                </div>
                {/*Copyright*/}
                </footer>
            </div>
        );
    }
}

export default footer;