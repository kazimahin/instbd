import { Button, CircularProgress, Grid, InputAdornment, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,MselectSearch,MSnackbar,MuseForm} from "../../../components/myLib"
import { objectToSelectValue } from '../../../functions'

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password 

var initialFValues = 

{ 
    id:"",

    name:"",
    email:"",
    phone:"",
    birth:"",
    height:"",
    weight:"",
    blood:"",
    religion:"",
    admission:"",
    nationality:"",
    nid:"",
    gender:"",
    
    live:"", 
    address:"", 

    parents:"",



    password: "" ,
    re_password: ""
}






function EditStudent(props) {
 
 



    const [loading1,setloading1] = useState(true)
    const [message,setmessage] = useState()
 
                           
    const [fetchData, setfetchData] = useState({
        subject:[],
        teacher:[],
        parents:[]
    })

    useEffect(async ()=>{
       setfetchData({...fetchData,parents:await objectToSelectValue( "user","parents")}) 
    },[])

    useEffect(()=>{


        
        axios.get("/api/web/dash/user/student/"+props.id)
            .then(v=>{
                 setValues(v.data.value[0]) 
                 setloading1(false)
                
            })




    },[])
     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.put("/api/web/dash/user/student/"+props.id,{...values})
            .then(v=>{

                setloading1(false)


                props.alert(<MSnackbar key={Math.random()} catagory="success">Data edited succesfully</MSnackbar>)
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
    } = MuseForm(initialFValues)


    console.log(values)

    return (
    < >
        {(!message) && 
            
            <MForm style={{ visibility:loading1 && "hidden"}} onSubmit={handleSubmit}>

             
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Personal Information</Typography>
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
                        <MInput 
                            label="Phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleInputChange}
                            error={errors.phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>
 
                    <Grid item xs={12} sm={4} >

                        <MInput 
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}

                        />
                    </Grid>
                    
         
            
         
                    <Grid item xs={12} sm={4} >
                        <MRadio
                            name="gender"
                            label="Gender"
                            items={[
                                { id: 'male', title: 'Male' },
                                { id: 'female', title: 'Female' },
                                { id: 'other', title: 'Other' },
                            ]}
                            value={values.gender}
                            onChange={handleInputChange}
                            error={errors.gender}
                        />
                    </Grid>

                   
                    <Grid item xs={12} sm={4} >

                        <MDatePicker
                            label="Date Of Birth"
                            name="birth"
                            value={values.birth}
                            onChange={handleInputChange}
                            error={errors.birth}

                        >
                        </MDatePicker>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Religion"
                            name="religion"
                            value={values.religion}
                            onChange={handleInputChange}
                            error={errors.religion}
                            options={[
                                {value:"Islam",title:"Islam"},
                                {value:"Hinduism",title:"Hinduism"},
                                {value:"Buddhism",title:"Buddhism"},
                                {value:"Christianity",title:"Christianity"},
                            ]}
                            // key={Math.random()}

                        >
                        </MselectSearch>
                    </Grid>


                    <Grid item xs={12} sm={4} >
                        <MselectSearch
                            label="Blood"
                            name="blood"
                            value={values.blood}
                            onChange={handleInputChange}
                            error={errors.blood}
                            options={[
                                {value:"O+",title:"O+"},
                                {value:"O-",title:"O-"},
                                {value:"A+",title:"A+"},
                                {value:"A-",title:"A-"},
                                {value:"B+",title:"B+"},
                                {value:"B-",title:"B-"},
                                {value:"AB+",title:"AB+"},
                                {value:"AB-",title:"AB-"},
                                {value:"unknown",title:"unknown"},
                                
                            ]}
                            // key={Math.random()}
                        >
                        </MselectSearch>
                    </Grid>
                         
 




                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Height"
                            name="height"
                            value={values.height}
                            onChange={handleInputChange}
                            error={errors.height}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">In</InputAdornment>,
                              }}
                            type="number"
                        >
                        </MInput>
                    </Grid>
                    
 



                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Weight"
                            name="weight"
                            value={values.weight}
                            onChange={handleInputChange}
                            error={errors.weight}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              }}
                            type="number"
                        >
                        </MInput>
                    </Grid>
                    
 




                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Nationality"
                            name="nationality"
                            value={values.nationality}
                            onChange={handleInputChange}
                            error={errors.nationality}
 
                        >
                        </MInput>
                    </Grid>
                    
 


 
                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="NID / Birth certificate"
                            name="nid"
                            value={values.nid}
                            onChange={handleInputChange}
                            error={errors.nid}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Parents ID"
                            name="parents"
                            value={values.parents}
                            options={fetchData.parents}
                            onChange={handleInputChange}
                            error={errors.parents}
                            // key={Math.random()}
                        >
                        </MselectSearch>
                    </Grid>
                    
 


                    <Grid item xs={12} sm={4} >
                        <MMonthPicker 
                                name="admission"
                                label="Admission Date"
                                value={values.admission}
                                onChange={handleInputChange}
                                error={errors.admission}
                            >
                        </MMonthPicker>
                    </Grid>
                    





                </Grid>
                
 
                
                <Grid container   >

                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Live With</Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} >
                        <MRadio
                            // label="asdf"
                            name="live"
                            value={values.live}
                            onChange={handleInputChange}
                            error={errors.live}
                            items={[
                                {id:"f",title:"Parents"},
                                 {id:"e",title:"2nd guardian"},
                                {id:"s",title:"Single"},
                            ]}
                        >

                        </MRadio>
                    </Grid>
 
                    {
                        values.live == "s" && 
                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={handleInputChange}
                            error={errors.address}
                        >
                        </MInput>
                    </Grid>
                    }
                    

 


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

export default EditStudent
