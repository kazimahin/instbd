import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,MSelect,MSnackbar,MuseForm} from "../../../components/myLib"
import WebBasic from "../../../redux/actions/WebBasic.action"

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality ,f_phone,m_phone  

const initialFValues = {

    name :"",
    start:new Date(),
    end:new Date()

}


function AddSession(props) {

    const dispatch = useDispatch()

    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()

         
     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.post("/api/web/dash/academic/session",{...values})
            .then(v=>{


                console.log(v);
                setloading1(false)


                props.alert(<MSnackbar key={Math.random()} catagory="success">Data saved succesfully</MSnackbar>)
                props.reload(Math.random())
                props.dialog("")

                dispatch(WebBasic())

            })
            .catch(e=>{

                console.log(e.response);
                setloading1(false)

                if(e.response.status == 400){
                    setErrors({...e.response.data.err})
                }else{
                    setmessage({status:e.response.status ,message:"Server Error Occured"})

                }
                
                
            })

        
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = MuseForm(initialFValues);

    return (
    < >
        {(!message) && 
            
            <MForm style={{ visibility:loading1 && "hidden"}} onSubmit={handleSubmit}>

                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Personal Details</Typography>
                    </Grid>

           
                    <Grid item xs={12} sm={4} >

                        <MInput
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}

                        >
                        </MInput>
                    </Grid>
                     
    
                    
                    <Grid item xs={12} sm={4} >
                        <MMonthPicker 
                            name="start"
                            label="Start Date"
                            value={values.start}
                            onChange={handleInputChange}
                            error={errors.start}
                        >
                        </MMonthPicker>
                    </Grid>
 
                    <Grid item xs={12} sm={4} >
                        <MMonthPicker 
                            name="end"
                            label="end Date"
                            value={values.end}
                            onChange={handleInputChange}
                            error={errors.end}
                        >
                        </MMonthPicker>
                    </Grid>
 
                    
                </Grid>

                <Button type="submit" variant="contained" >asdfasdfasdf</Button>
                
                    
            </MForm>
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

export default AddSession
