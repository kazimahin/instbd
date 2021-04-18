import React, { Component } from 'react';
import Helmet from "react-helmet"

class Class_ extends Component {
    render() {
        return (
            <div>
                <Helmet>
                <script type="text/javascript" src="/scriptFor/class.js"></script>
                </Helmet>
                <section>
                <div>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                    </nav>
                </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="form-header blue-gradient accent-1">
                                        <h3>Add a Class</h3>
                                    </div>
                                </div>

                                <div className="pl-4 pr-4  ">
                                <select defaultValue="" className="mdb-select md-form">
                                        <option value="" disabled >Choose your option</option>
                                        <option value="1" disabled>Disabled option</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label className="mdb-main-label">Example label</label>
                                    
                                    <select defaultValue="" className="mdb-select md-form">
                                        <option value="" disabled >Choose your option</option>
                                        <option value="1" disabled>Disabled option</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label className="mdb-main-label">Example label</label>
                                    
                                    <select defaultValue="" className="mdb-select md-form">
                                        <option value="" disabled >Choose your option</option>
                                        <option value="1" disabled>Disabled option</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label className="mdb-main-label">Example label</label>
                                    
                                    
                                    <div className="mb-5 mt-5">
                                        <center><button type="button" className="btn btn-outline-default btn-rounded waves-effect mx-auto">Default</button></center>
                                    </div>

                                </div>
                             </div>
                        </div>
                        <div className="col-md-8">
                            {/* Table with panel */}
                            <div className="card mt-5 card-cascade narrower">
                            {/*Card image*/}
                            <div className="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                                
                                     <a  className="white-text mx-3 text-center w-100">Table name</a>

                                  
                            </div>
                            {/*/Card image*/}
                            <div className="px-4">
                                 {/*Table*/}
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                            <th scope="col">Heading</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                 {/*Table*/}
                                </div>
                            </div>
                            </div>
                            {/* Table with panel */}

                        </div>
                    </div>
                </section>


                <section>





                </section>
            </div>
        );
    }
}

export default Class_;