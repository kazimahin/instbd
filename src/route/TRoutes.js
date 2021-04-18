import React, { Component } from 'react';
import {Route,Switch ,Redirect} from "react-router-dom"
import { connect } from "react-redux";
 

import Template from "../template/"
  
 
class TRoutes extends Component {

  

  

    render() {

        const Header = Template[this.props.r_state.WebBasic.value.template] && Template[this.props.r_state.WebBasic.value.template].Header
        const Footer = Template[this.props.r_state.WebBasic.value.template] && Template[this.props.r_state.WebBasic.value.template].Footer
        const Main = Template[this.props.r_state.WebBasic.value.template] && Template[this.props.r_state.WebBasic.value.template]
  
         


          return (
            <div>
               
               {Header && <Header></Header>}

                    <Switch>
                
                        { 
                        
                        this.props.r_state.WebBasic.value.routes.map((value1,key)=>{

                        if(value1.permission.read){

                            if(Array.isArray(value1.link)){
                                value1.link.map((value2,key2)=>{ 
                                    if(value2.permission.read){
                                        return(
                                            <Route path={value2.link} exact component={ Main[value2.name]} ></Route>
                                        )
                                    }
                                })
                                    
                            }else{
                                return(
                                    <Route path={value1.link} exact component={ Main[value1.name]} ></Route>
                                )
                            }

                        }
                        })

                        }
                        
                         
                    </Switch>

               {Footer && <Footer></Footer>}

            </div>
        );
    }




}

 
const mapStateToProps = state =>{
    return {
      r_state:state
    }
  }
  
 
  
  export default connect(mapStateToProps,null)(TRoutes);