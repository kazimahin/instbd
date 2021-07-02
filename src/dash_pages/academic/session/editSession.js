import { Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,MSelect,MSnackbar,MuseForm} from "../../../components/myLib"

import WebBasic from "../../../redux/actions/WebBasic.action"
// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 

var initialFValues = {

    
    name :"",
    start :new Date(),
    end:new Date()


}


function EditSession(props) {
 
 
    let r_state = useSelector(state=>state)
    const dispatch = useDispatch()

    const [loading1,setloading1] = useState(true)
    const [message,setmessage] = useState()
 
    

    var startdatemin;
    var startdatemax;

    var enddatemin;
    var enddatemax;

    var startdisabled;
    var enddisabled;
    
    r_state.WebBasic.value.session.map((v,index)=>{

        if(v.id == props.id){

            const startdate = new Date(v.start) 
            const enddate = new Date(v.end) 
            const today = new Date() 

            const agerstartdate = r_state.WebBasic.value.session[index-1] && new Date(r_state.WebBasic.value.session[index-1].start)
            const agerenddate = r_state.WebBasic.value.session[index-1] &&  new Date(r_state.WebBasic.value.session[index-1].end)

            const agerenddatePlus1 = r_state.WebBasic.value.session[index-1] &&  new Date(r_state.WebBasic.value.session[index-1].end).setMonth(agerenddate.getMonth()+1)


            const porerstartdate = r_state.WebBasic.value.session[index+1] && new Date(r_state.WebBasic.value.session[index+1].start)
            const porerstartdateMinus1 =  r_state.WebBasic.value.session[index+1] &&  new Date(r_state.WebBasic.value.session[index+1].start).setMonth(porerstartdate.getMonth()-1)

            const porerenddate = r_state.WebBasic.value.session[index+1] && new Date(r_state.WebBasic.value.session[index+1].end)

            startdatemin = agerenddatePlus1 && agerenddatePlus1
            startdatemax = porerstartdateMinus1 && porerstartdateMinus1


            enddatemin = startdate.setMonth(startdate.getMonth()+1)
            enddatemax = porerstartdateMinus1 && porerstartdateMinus1


            startdisabled = startdate < today
            enddisabled =  r_state.WebBasic.value.session[index+1] ? (enddate < today ) :false
            
             
        }


  
   
        
   
      })
  



    useEffect(()=>{


        
        axios.get("/api/web/dash/academic/session/"+props.id)
            .then(v=>{
                 setValues(v.data.value) 
                 setloading1(false)
                
            })

        


    },[])
     



     const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.put("/api/web/dash/academic/session/"+props.id,{...values})
            .then(v=>{

                setloading1(false)



                props.alert(<MSnackbar key={Math.random()} catagory="success">Data edited succesfully</MSnackbar>)
                props.reload(Math.random())
                props.dialog("")
                dispatch(WebBasic())



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

     const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = MuseForm(initialFValues)

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
                          minDate={startdatemin}
                          maxDate={startdatemax}
                          disabled={startdisabled}  
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
                          minDate={enddatemin}
                          maxDate ={enddatemax}
                          disabled={enddisabled}
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

export default EditSession
