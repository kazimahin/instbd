import { Button, CircularProgress, Grid, InputAdornment, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MDatePicker, MForm, MInput, MMonthPicker, MRadio,MselectSearch,MSnackbar,MuseForm} from "../../../components/myLib"

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality ,f_phone,m_phone  

const initialFValues = {

    name :"",
    qualification :"",
    birth :new Date(),
    phone :"",
    phone2 :"",
    email :"",
    nid :"",
    nationality :"Bangladeshi",
    gender :"male",
    religion :"Islam",
    blood :"",
    p_address :"",
    p_city :"",
    p_zip :"",
    c_address :"",
    c_city :"",
    c_zip :"",
    password:"",
    re_password:'',

    f_name:'',
    f_nid:'',
    f_nationality :'Bangladeshi',
    f_phone:'',
    m_name:'',
    m_nid :'',
    m_nationality:'Bangladeshi' ,
    m_phone:'',


    designation:'' ,
    startdate:null,
    sallary:'',
    subject:'',

}


function AddEmployee(props) {


    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()

         
    const [fetchData, setfetchData] = useState({
        subject:[],
        teacher:[]
    })

    useEffect(()=>{
        axios.get("http://origin.demo.com/api/web/const/subject")
            .then(v=>{
                setfetchData({...fetchData,subject:v.data.value})
            })
            .catch(e=>{
                setmessage({status:e.response.status ,message:"Server Error Occured"})
            })


    },[])





     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.post("/api/web/dash/user/employee",{...values})
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
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Personal Details</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <MInput 
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        >
                        </MInput>
                    </Grid>
                    
                    <Grid item xs={12} sm={3} >
                        <MInput 
                            label="Qualification"
                            name="qualification"
                            value={values.qualification}
                            onChange={handleInputChange}
                            error={errors.qualification}
                        >
                        </MInput>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                        <MselectSearch 
                            label="Designation"
                            name="designation"
                            value={values.designation}
                            onChange={handleInputChange}
                            error={errors.designation}
                            options={[
                                {value:"Teacher",title:"Teacher"},
                                {value:"Assistant teacher",title:"Assistant teacher"},
                                {value:"Stuff",title:"Stuff"},
                            
                        
                            ]}
                        >
                        </MselectSearch>
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
                        >
                        </MselectSearch>
                    </Grid>
                                        
                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="NID (optional)"
                            name="nid"
                            value={values.nid}
                            onChange={handleInputChange}
                            error={errors.nid}
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
                            label="Phone (optional)"
                            name="phone2"
                            value={values.phone2}
                            onChange={handleInputChange}
                            error={errors.phone2}
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
                            // type="email"
                        >
                        </MInput>
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
                        />
                    </Grid>



                </Grid>
                
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Parents</Typography>
                    </Grid>
        


                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Father's name"
                            name="f_name"
                            value={values.f_name}
                            onChange={handleInputChange}
                            error={errors.f_name}
                        >
                        </MInput>
                    </Grid>


                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="Father's NID"
                            name="f_nid"
                            value={values.f_nid}
                            onChange={handleInputChange}
                            error={errors.f_nid}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Father's Nationality"
                            name="f_nationality"
                            value={values.f_nationality}
                            onChange={handleInputChange}
                            error={errors.f_nationality}
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Father's Phone"
                            name="f_phone"
                            value={values.f_phone}
                            onChange={handleInputChange}
                            error={errors.f_phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        
                    </Grid>





                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Mother's name"
                            name="m_name"
                            value={values.m_name}
                            onChange={handleInputChange}
                            error={errors.m_name}
                        >
                        </MInput>
                    </Grid>


                    <Grid item xs={12} sm={8} >
                        <MInput 
                            label="Mother's NID"
                            name="m_nid"
                            value={values.m_nid}
                            onChange={handleInputChange}
                            error={errors.m_nid}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Mother's Nationality"
                            name="m_nationality"
                            value={values.m_nationality}
                            onChange={handleInputChange}
                            error={errors.m_nationality}
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        <MInput 
                            label="Mother' Phone"
                            name="m_phone"
                            value={values.m_phone}
                            onChange={handleInputChange}
                            error={errors.m_phone}
                            type="number"
                        >
                        </MInput>
                    </Grid>



                    <Grid item xs={12} sm={4} >
                        
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
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Academic</Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} >
                        <MMonthPicker 
                            name="startdate"
                            label="Start Date"
                            value={values.startdate}
                            onChange={handleInputChange}
                            error={errors.startdate}
                        >
                        </MMonthPicker>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <MInput 
                            name="sallary"
                            label="Sallary "
                            value={values.sallary}
                            onChange={handleInputChange}
                            error={errors.sallary}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Tk</InputAdornment>,
                              }}
                            type="number"                        >
                        </MInput>
                    </Grid>
                        
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            name="subject"
                            label="Subject (optional)"
                            options={fetchData.subject}
                            value={values.subject}
                            onChange={handleInputChange}
                            error={errors.subject}
                            
                        >
                        </MselectSearch>
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

export default AddEmployee
