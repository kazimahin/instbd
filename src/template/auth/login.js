// all login page will be common 

import React, { Component } from 'react';
import {connect} from "react-redux"
import UserAuth from '../../redux/actions/UserAuth.action';  

import {server} from "../../functions/axios"
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state={
        email:"",
        password:"",
        catagory:"",
        error:{value:null,err:{}},
        message:""
    }
   
    inputHandler=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }

    submitHandler=(e)=>{

        e.preventDefault()
        server.post("/auth/login",{email: this.state.email, password: this.state.password,catagory:this.state.catagory},{withCredentials:false})
            .then(v=>{
                this.setState({
                    error:{value:null,err:{}},
                    message:"loged in successfully"
                })
                this.props.UserAuth() // authintication update kora hoise

                 })
            .catch(e=>{
                this.setState({
                    error:e.response.data



                })

                console.log(e);

            })
          
    }

    render() {

         
          
        return (
            (this.props.r_state.UserAuth.auth) ? <Redirect to="/d"></Redirect>:
            <div style={{marginTop:"100px"}}>
                <div className="card mx-xl-5">
                    <div className="card-body">
                        <form onSubmit={this.submitHandler}>
                       


                            <div className="form-row">
                                <div className="col-md-4 mb-3 md-form">
                                <label htmlFor="email">email</label>
                                <input onChange={this.inputHandler} type="text" className={`form-control ${!this.state.error.err.email?"is-valid":"is-invalid"}`} id="email" name="email"   required />
                                    
                                <div className="invalid-feedback">
                                    {this.state.error.err.email}
                                </div>
                                </div>

                                    
                            </div>





                            
                            <div className="form-row">
                                <div className="col-md-4 mb-3 md-form">
                                <label htmlFor="password">password</label>
                                <input onChange={this.inputHandler} type="text" className={`form-control ${!this.state.error.err.password?"is-valid":"is-invalid"}`} id="password" name="password"   required />
                                    
                                <div className="invalid-feedback">
                                    {this.state.error.err.password}
                                </div>
                                </div>
                            </div>

                                    

                            <div className="form-row">

                                <div className="form-check form-check-inline">
                                    <input onChange={this.inputHandler} type="radio" className="form-check-input" id="materialInline3" value="superadmin" name="catagory"  />
                                    <label className="form-check-label" htmlFor="materialInline3">superadmin</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.inputHandler} type="radio" className="form-check-input" id="materialInline1" value="admin" name="catagory" />
                                    <label className="form-check-label" htmlFor="materialInline1">admin</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.inputHandler} type="radio" className="form-check-input" id="materialInline2" value="teacher" name="catagory" />
                                    <label className="form-check-label" htmlFor="materialInline2">teacher</label>
                                </div>
                                <div className="invalid-feedback">
                                    {this.state.error.err.password}
                                </div>
                                    
                            </div>


                            
                            
                            <button className="btn btn-primary btn-sm btn-rounded" type="submit">Submit form</button>



                        </form>
                    </div>
                </div>
            </div>

        );//end of return
        
    }//end of render
}//end of class

const mapStateToProps = state =>{

    return {
      r_state:state
    }
  
  }
  
  const mapDispatchToProps = dispatch=>{
  
    return{
        UserAuth:()=>dispatch(UserAuth()),
     }
  
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);