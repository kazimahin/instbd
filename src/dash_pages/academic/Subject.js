import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div>
                <div className="">
                <section className="section team-section">
    {/* Grid row */}
    <div className="row text-center">
        {/* Grid column */}
        <div className="col-md-8 mb-4">
        {/* Card */}
        <div className="card card-cascade cascading-admin-card user-card">
            {/* Card Data */}
            <div className="admin-up d-flex justify-content-start">
            <i className="fas fa-users info-color py-4 mr-3 z-depth-2" />
            <div className="data">
                <h5 className="font-weight-bold dark-grey-text">Edit Profile -
                <span className="text-muted">Complete your profile</span>
                </h5>
            </div>
            </div>
            {/* Card Data */}
            {/* Card content */}
            <div className="card-body card-body-cascade">
            {/* Grid row */}
            <div className="row">
                {/* Grid column */}
                <div className="col-lg-4">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form12" className="form-control form-control-sm" />
                    <label htmlFor="form12" >Username</label>
                </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form3" className="form-control form-control-sm" />
                    <label htmlFor="form3" >Email address</label>
                </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form4" className="form-control form-control-sm" disabled="disabled" />
                    <label htmlFor="form4" className="disabled">Company</label>
                </div>
                </div>
                {/* Grid column */}
            </div>
            {/* Grid row */}
            {/* Grid row */}
            <div className="row">
                {/* Grid column */}
                <div className="col-md-6">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form5" className="form-control form-control-sm" />
                    <label htmlFor="form5" >First name</label>
                </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-6">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form6" className="form-control form-control-sm" />
                    <label htmlFor="form6" >Last name</label>
                </div>
                </div>
                {/* Grid column */}
            </div>
            {/* Grid row */}
            {/* Grid row */}
            <div className="row">
                {/* Grid column */}
                <div className="col-md-12">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form7.1" className="form-control form-control-sm" />
                    <label htmlFor="form7.1" >Address</label>
                </div>
                </div>
                {/* Grid column */}
            </div>
            {/* Grid row */}
            {/* Grid row */}
            <div className="row">
                {/* Grid column */}
                <div className="col-lg-4 col-md-12">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form7" className="form-control form-control-sm" />
                    <label htmlFor="form7" >City</label>
                </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4 col-md-6">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form8" className="form-control form-control-sm" />
                    <label htmlFor="form8" >Country</label>
                </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-lg-4 col-md-6">
                <div className="md-form form-sm mb-0">
                    <input type="text" id="form9" className="form-control form-control-sm" />
                    <label htmlFor="form9" >Postal Code</label>
                </div>
                </div>
                {/* Grid column */}
            </div>
            {/* Grid row */}
            {/* Grid row */}
            <div className="row">
                {/* Grid column */}
                <div className="col-md-12">
                <h4 className="text-muted text-left my-4">About me</h4>
                {/* Basic textarea */}
                <div className="md-form mb-0">
                    <textarea type="text" id="form10" className="md-textarea form-control" rows={3} defaultValue={""} />
                    <label htmlFor="form10">Basic textarea</label>
                </div>
                </div>
                {/* Grid column */}
            </div>
            {/* Grid row */}
            </div>
            {/* Card content */}
        </div>
        {/* Card */}
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 mb-4">
        {/* Card */}
        <div className="card profile-card">
            {/* Avatar */}
            <div className="avatar z-depth-1-half mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" alt={""} /></div>
             <div className="card-body pt-0 mt-0">
            {/* Name */}
            <h3 className="mb-3 font-weight-bold">
                <strong>Anna Deynah</strong>
            </h3>
            <h6 className="font-weight-bold cyan-text mb-4">Web Designer</h6>
            <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                consequat.</p>
            <button href="#" className="btn btn-info btn-rounded"> Follow</button>
            </div>
        </div>
        {/* Card */}
        </div>
        {/* Grid column */}
    </div>
    {/* Grid row */}
    </section>

                </div>
            </div>
        );
    }
}

export default Subject;