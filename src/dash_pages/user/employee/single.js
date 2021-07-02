 
 import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {MDialog, MProfileTab, MRouteView} from "../../../components/myLib"
import Skeleton from '@material-ui/lab/Skeleton';

function Single() {
 
    let { id } = useParams();

    const [user,setUser] = useState({})
    const [dialog,setDialog] = useState()
    const [loading,setloading] = useState(true)


    useEffect(()=>{
        axios.get(`/api/web/dash/user/employee/${id}`)
            .then(v=>{
                setUser(v.data.value[0])
                setloading(false)
            })
            .catch(e=>
                
                {
                    setDialog(
                        <MDialog
                            key={Math.random()}
                            children={<h1>error when data fetch</h1>}
                            // title="hellow"
                        />
                    )
                    setloading(false)
                }

            )
    },[])


    console.log(loading);
   return(
     <>
    
         
        
        
        
        
            <MRouteView loading={loading} routes={[{name:"user"},{name:"employee",link:"/d/user/employee"}]} />  


            <MProfileTab
                
                name={ user.name  }
                id={user.id }
                catagory="Employee"
                img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                activeColor="skyblue"
                data =  {[
                    {name:"Details" , icon:"fas fa-info-circle" , component:<h1>Details</h1>},
                    {name:"Result" , icon:"fas fa-info-circle" , component:<h1>Result</h1>},
                    {name:"Attandance" , icon:"fas fa-info-circle" , component:<h1>Attandance</h1>},
                    {name:"Accounts" , icon:"fas fa-info-circle" , component:<h1>Accounts</h1>},
                    {name:"Details" , icon:"fas fa-info-circle" , component:<h1>Details</h1>},
                    {name:"Details" , icon:"fas fa-info-circle" , component:<h1>Details</h1>},
                    
                ]}
                loading={loading}
            ></MProfileTab>


            {dialog}
 
         

     
    </>
    )
}

export default Single