import React, { Component } from 'react';

class Notice extends Component {
    render() {
        return (

            <>
                <div>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                    </nav>
                </div>
                
                <section>
                    <div className="row">
                        <div className="col-md-12  ">
                        <ul className="nav md-pills nav-justified pills-warning mb-4">
                            <li className="nav-item pl-0">
                            <a className="nav-link active " data-toggle="tab" href="#panel104" role="tab">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#panel105" role="tab">Features</a>
                            </li>
                            <li className="nav-item pr-0">
                            <a className="nav-link" data-toggle="tab" href="#panel106" role="tab">Pricing</a>
                            </li>
                        </ul>
                        {/* Tab panels */}
                        <div className="tab-content card">
                            {/*Panel 1*/}
                            <div className="tab-pane fade in show active" id="panel104" role="tabpanel">
                                







                            <div className="row align-items-center">
                        {/* Grid column */}
                        <div className="col-lg-5 col-xl-4">
                        {/* Featured image */}
                        <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image" />
                            <a>
                            <div className="mask rgba-white-slight" />
                            </a>
                        </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-lg-7 col-xl-8">
                        {/* Post title */}
                        <h4 className="font-weight-bold mb-3">
                            <strong>Title of the news</strong>
                        </h4>
                        {/* Excerpt */}
                        <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus et aut officiis cum soluta
                            nobis est eligendi placeat facere aut rerum.</p>
                        {/* Post data */}
                        <p>by
                            <a className="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
                        {/* Read more button */}
                        <a className="btn btn-primary btn-md mx-0 btn-rounded">Read more</a>
                        </div>
                        {/* Grid column */}
                    </div>






                            </div>
                            {/*/.Panel 1*/}
                            {/*Panel 2*/}
                            <div className="tab-pane fade" id="panel105" role="tabpanel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                porro voluptate odit minima.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                porro voluptate odit minima.</p>
                            </div>
                            {/*/.Panel 2*/}
                            {/*Panel 3*/}
                            <div className="tab-pane fade" id="panel106" role="tabpanel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                porro voluptate odit minima.</p>
                            </div>
                            {/*/.Panel 3*/}
                        </div>
                        </div>
                    </div>
                </section>



                


           
            </>
        );
    }
}

export default Notice;