import { Button, CircularProgress, FormControl, Grid, InputAdornment, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,MselectSearch,MSnackbar,MuseForm} from "../../../components/myLib"

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality ,f_phone,m_phone  

const initialFValues =  

    { 
        f_name:"",
        f_occupation:"",
        f_nationality:"bangladeshi",
        f_email:"",
        f_phone:"",
        f_company:"",
        f_salary:"",
        f_nid:"",
        
        m_name:"",
        m_occupation:"",
        m_nationality:"bangladeshi",
        m_email:"",
        m_phone:"",
        m_company:"",
        m_salary:"",
        m_nid:"",

        e_name:"",
        e_phone:"",
        e_address:"",
        e_relation:"",
        e_email:"", 

        p_address :"",
        p_city:"",
        p_zip:"",
        c_address:"",
        c_city:"",
        c_zip:"",


        primary:"f",
        password: "" ,
        re_password: ""
    }

 


function AddParents(props) {


    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()

         
     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.post("/api/web/dash/user/parents",{...values})
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
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Fathers Information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Name"
                            name="f_name"
                            value={values.f_name}
                            onChange={handleInputChange}
                            error={errors.f_name}
                        >
                        </MInput>
                    </Grid>
                    
            
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Phone"
                            name="f_phone"
                            value={values.f_phone}
                            onChange={handleInputChange}
                            error={errors.f_phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>
 
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Email"
                            name="f_email"
                            value={values.f_email}
                            onChange={handleInputChange}
                            error={errors.f_email}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Occupation"
                            name="f_occupation"
                            value={values.f_occupation}
                            onChange={handleInputChange}
                            error={errors.f_occupation}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Company"
                            name="f_company"
                            value={values.f_company}
                            onChange={handleInputChange}
                            error={errors.f_company}
 
                        >
                        </MInput>
                    </Grid>
                    

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Salary"
                            name="f_salary"
                            value={values.f_salary}
                            onChange={handleInputChange}
                            error={errors.f_salary}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Tk</InputAdornment>,
                              }}
                            type="number" 
                        >
                        </MInput>
                    </Grid>
                    




                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Nationality"
                            name="f_nationality"
                            value={values.f_nationality}
                            onChange={handleInputChange}
                            error={errors.f_nationality}
                        >
                        </MInput>
                    </Grid>
                    

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Nid"
                            name="f_nid"
                            value={values.f_nid}
                            onChange={handleInputChange}
                            error={errors.f_nid}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                </Grid>
                
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Mothers Information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Name"
                            name="m_name"
                            value={values.m_name}
                            onChange={handleInputChange}
                            error={errors.m_name}
                        >
                        </MInput>
                    </Grid>
                    
            
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Phone"
                            name="m_phone"
                            value={values.m_phone}
                            onChange={handleInputChange}
                            error={errors.m_phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>
 
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Email"
                            name="m_email"
                            value={values.m_email}
                            onChange={handleInputChange}
                            error={errors.m_email}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Occupation"
                            name="m_occupation"
                            value={values.m_occupation}
                            onChange={handleInputChange}
                            error={errors.m_occupation}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Company"
                            name="m_company"
                            value={values.m_company}
                            onChange={handleInputChange}
                            error={errors.m_company}
 
                        >
                        </MInput>
                    </Grid>
                    

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Salary"
                            name="m_salary"
                            value={values.m_salary}
                            onChange={handleInputChange}
                            error={errors.m_salary}
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Tk</InputAdornment>,
                              }}
                        >
                        </MInput>
                    </Grid>
                    


                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Nationality"
                            name="m_nationality"
                            value={values.m_nationality}
                            onChange={handleInputChange}
                            error={errors.m_nationality}
                        >
                        </MInput>
                    </Grid>
                    

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Nid"
                            name="m_nid"
                            value={values.m_nid}
                            onChange={handleInputChange}
                            error={errors.m_nid}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                </Grid>
               
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Address</Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} >
                        <MInput 
                            label="Current Address"
                            name="c_address"
                            value={values.c_address}
                            onChange={handleInputChange}
                            error={errors.c_address}
                        >
                        </MInput>
                    </Grid>
                    
                    <Grid item xs={12} sm={3} >
                        <MInput 
                            label="City"
                            name="c_city"
                            value={values.c_city}
                            onChange={handleInputChange}
                            error={errors.c_city}
                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <MInput 
                            label="Zip"
                            name="c_zip"
                            value={values.c_zip}
                            onChange={handleInputChange}
                            error={errors.c_zip}
                            type="number"

                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <MInput 
                            label="Permanent Address"
                            name="p_address"
                            value={values.p_address}
                            onChange={handleInputChange}
                            error={errors.p_address}
                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <MInput 
                            label="City"
                            name="p_city"
                            value={values.p_city}
                            onChange={handleInputChange}
                            error={errors.p_city}
                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <MInput 
                            label="Zip"
                            name="p_zip"
                            value={values.p_zip}
                            onChange={handleInputChange}
                            error={errors.p_zip}
                            type="number"

                        >
                        </MInput>
                    </Grid>
                    
                </Grid>
        
  
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >2nd Guardian Information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Name"
                            name="e_name"
                            value={values.e_name}
                            onChange={handleInputChange}
                            error={errors.e_name}
                        >
                        </MInput>
                    </Grid>
                    
            
                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Phone"
                            name="e_phone"
                            value={values.e_phone}
                            onChange={handleInputChange}
                            error={errors.e_phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>
 
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Email"
                            name="e_email"
                            value={values.e_email}
                            onChange={handleInputChange}
                            error={errors.e_email}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Relation"
                            name="e_relation"
                            value={values.e_relation}
                            onChange={handleInputChange}
                            error={errors.e_relation}

                        />
                    </Grid>
                    
         
            
                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="Address"
                            name="e_address"
                            value={values.e_address}
                            onChange={handleInputChange}
                            error={errors.e_address}
 
                        >
                        </MInput>
                    </Grid>
                    
 

                </Grid>
               
              
                
                
                <Grid container   >

                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Primary Contact informaton</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MRadio
                            // label="asdf"
                            name="primary"
                            value={values.primary}
                            onChange={handleInputChange}
                            error={errors.primary}
                            items={[
                                {id:"f",title:"Father"},
                                {id:"m",title:"Mother"},
                                {id:"e",title:"2nd guardian"},
                            ]}
                        >

                        </MRadio>
                    </Grid>
 


                </Grid>

                <Grid container   >

                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Authentication</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}
                            type="password"
                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Retype Password"
                            name="re_password"
                            value={values.re_password}
                            onChange={handleInputChange}
                            error={errors.re_password}
                            type="password"

                        >
                        </MInput>
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

export default AddParents
