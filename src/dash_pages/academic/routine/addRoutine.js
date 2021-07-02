import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,Mroutine,MSelect,MSnackbar,MuseForm} from "../../../components/myLib"



function AddRoutine(props) {
  
    const initialFValues = {

        name :"",
        value:{
            Saturday:[],
            Sunday:[],
            Monday:[],
            Tuesday:[],
            Wednesday:[],
            Thursday:[],
            Friday:[],
        
    }
   
        
    
    }
    
 

    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()

    const [values,setValues] = useState(initialFValues)
    const [ errors,setErrors] = useState({})
     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.post("/api/web/dash/academic/routine",{...values,})
            .then(v=>{

                setloading1(false)


                props.alert(<MSnackbar key={Math.random()} catagory="success">Data saved succesfully</MSnackbar>)
                props.reload(Math.random())
                props.dialog("")


            })
            .catch(e=>{
                setloading1(false)

                if(e.response.status == 400){
                    setErrors({...e.response.data.err})
                }else{
                    setmessage({status:e.response.status ,message:"Server Error Occured"})

                }
                
                
            })

        
    }

 
    const teacher = [
        {value:"mahin",title:"mahin"},
        {value:"sakib",title:"sakib"},
        {value:"sakin",title:"sakin"},
        {value:"asim",title:"asim"},
        {value:"alina",title:"alina"},
        
      ]
    
    
      const subject = [
        {value:"bangla",title:"bangla"},
        {value:"english",title:"english"},
        {value:"math",title:"math"},
        {value:"chemisty",title:"chemisty"},
        {value:"physicsf",title:"physicsf"},
      ]

      const setRoutineValue =(value)=>{
            setValues({
                ...values,
                value
            })
      }
     return (
    < >
        {(!message) && 
            
            <MForm style={{ visibility:loading1 && "hidden"}} onSubmit={handleSubmit}>

                <Grid container   >
                    
       
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})}}
                            error={errors.name}
                        >
                        </MInput>
                    </Grid>
                    
                     <Grid item style={{marginTop:"20px"}}  xs={12} sm={12} >
                        <Mroutine

                            data={values.value}
                            setData={setRoutineValue}
                            subject={subject}
                            teacher={teacher}

                        />
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

export default AddRoutine
