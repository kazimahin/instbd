import React, { Component } from 'react';


//import dependency
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom" 



//import components
import DRoutes from "./route/DRoutes"
import TRoutes from "./route/TRoutes"
import {connect} from "react-redux"
import UserAuth from './redux/actions/UserAuth.action';
import WebBasic from './redux/actions/WebBasic.action';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { blue ,green, orangez } from '@material-ui/core/colors';
import {server} from "./functions/axios"
 

server.defaults.headers.mahin = "mahin"

   
class App extends Component {
 
 
     componentDidMount(){
       this.props.WebBasic()
       this.props.UserAuth()

    } 
    
  


    render() {
      // server.defaults.headers.mahin = "asdf"
       
      const theme= createMuiTheme({
        palette:{
          // type:"dark",
          primary:{
            main:blue[500],
            light:blue[100],
            dark:blue[900]
          }
          
        }
      
      })
    

      const valueForDash = {
       UserAuth: this.props.r_state.UserAuth,
       WebBasic:this.props.r_state.WebBasic
      }

      if (this.props.r_state.WebBasic.loading || !this.props.r_state.UserAuth.cheak  ) {
        return <h1>loading</h1>
        
      }else if (this.props.r_state.WebBasic.available) {
        return <h1>domain available</h1>
      }else{


        return (
          <>
              <BrowserRouter>    
              <ThemeProvider theme={theme}>
                    <Switch>

                        {/* D mens dash T mens template */}
                   
                    <Route path="/d/"  > {this.props.r_state.UserAuth.auth?<DRoutes value={valueForDash}></DRoutes> :<Redirect to="/login"></Redirect>}  </Route> 
                    <TRoutes></TRoutes>


                    

                    </Switch>
              </ThemeProvider>
              </BrowserRouter>

        
          </>            
        );
      } 
    } 
} 


 
const mapStateToProps = state =>{

  return {
    r_state:state
  }

}

const mapDispatchToProps = dispatch=>{

  return{
    UserAuth:()=>dispatch(UserAuth()),
    WebBasic:()=>dispatch(WebBasic())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);