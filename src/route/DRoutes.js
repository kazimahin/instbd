
import React, { useEffect } from 'react';
import DashPages from '../dash_pages/';
import {MHeader} from "../components/myLib";


import { Switch , Route} from "react-router-dom"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux"
 
 
function DRoutes(props) {

  const r_state = useSelector(state=>state)
  const dispatch = useDispatch()


 
  if(r_state.SetSession.current == null){
 


    r_state.WebBasic.value.session.map((v,index)=>{
      const startdate = new Date(v.start).getTime()
      const enddate = new Date(v.end).getTime()
      const today = new Date().getTime()


 
      if( startdate  < today  && today < enddate){
        dispatch({type:"SetSession" , payload:{current:{...v,index},today:{...v,index}}})
 
      }
 
    })

  }

  


 
  const headerValue= {

    
    name:props.value.WebBasic.value.name,
    logo:"https://edukasyon-production.s3.amazonaws.com/uploads/school/avatar/13589/Apas_Integrated_Senior_High_School.jpg",
    menu:{
      button:<MoreVertIcon style={{padding:"0 10px"}} ></MoreVertIcon>,
      list:[
        {value:<div style={{padding:"15px"}}>Dashbord</div> , link:"/"},
        {value:<div style={{padding:"15px"}}>Login</div> , link:"/login"},
        {value:<div style={{padding:"15px"}}>Log OUt</div>, link:"/logout"}
      ]
    },
    othermenu:[
      {
        button:<MailIcon style={{padding:"0 10px"}} ></MailIcon>,
        list:[
          {value:<div style={{padding:"15px"}}>helow how are ou</div> , link:"/"},
          {value:<div style={{padding:"15px"}}>lorem cholen keno</div> , link:"/login"},
          {value:<div style={{padding:"15px"}}>Log OasdfadUt</div>, link:"/logout"}
        ]
      },
      {
        button:<NotificationsActiveIcon style={{padding:"0 10px"}}></NotificationsActiveIcon>,
        list:[
          {value:<div style={{padding:"15px"}}>Dash adf asdf fda dfbord</div> , link:"/"},
          {value:<div style={{padding:"15px"}}>adf asdf asdf asdf sdaf sd fasdf </div> , link:"/login"},
          {value:<div style={{padding:"15px"}}>Log a sdfas fasd fasdf asdfOUt</div>, link:"/logout"}
        ]
      },
    ],
    links:{
      // {Dashbord,Admin,Subject,Class:Class_,Event,Notice,Student}
      dash:[
        ...r_state.UserAuth.permission
      
      ],
      web:[
         ...r_state.WebBasic.value.routes

      ],
    },



  }


  const style= makeStyles(theme=>({
    
    
  }))
  const classes= style()


  return (
    
        <MHeader value={headerValue}  >
          <Switch>
            {         
                headerValue.links.dash.map((value,index)=>{
                    if(value.permission.read){
                      if (Array.isArray(value.link)   ) {
                        return( value.link.map((value2,index)=> value2.permission.read && <Route key={index} path={value2.link}  component={DashPages[value2.name]} exact={value2.exact } ></Route> ) )
                      }else {

                          return <Route key={index} path={value.link} component={DashPages[value.name]} exact={value.exact }   ></Route>
 

                      }
                    }
                    
                })
            }
          </Switch>
        </MHeader>
    );
}

export default DRoutes;