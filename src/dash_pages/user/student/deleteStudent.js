import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MDatePicker, MForm, MInput, MRadio,MSnackbar,MuseForm} from "../../../components/myLib"

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 
 

function AddStudent(props) {
 
 



    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()
 
    
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.delete("/api/web/dash/user/student/"+props.id)
            .then(v=>{

                setloading1(false)


                props.alert(<MSnackbar key={Math.random()} catagory="success">Data Deleted succesfully</MSnackbar>)
                props.reload(Math.random())
                props.dialog("")


            })
            .catch(e=>{
                
                setloading1(false)
                setmessage({status:e.response.status ,message:"Server Error Occured"})

                 
                
            })

        
    }

 
    return (
    < >
        {(!message) && 
            
          <div  style={{ visibility:loading1 && "hidden"}}>
              are you sure to delete user :{props.id} name:{props.name}
              <br></br>
              <Button onClick={handleSubmit}>delete</Button>
          </div>

        }
        {
            loading1 && <div style={{ position:"fixed",left:"50%",top:"50%"}}><CircularProgress disableShrink /></div> 
        }
        {
            message && <Typography color="error" variant="h4"  >{message.message}{ " With status code:"+ message.status+". please try again" }</Typography>
        }


    </>
    
    )
}

export default AddStudent
