import { Button, CircularProgress, FormControl, Grid, InputAdornment, Typography } from '@material-ui/core'
import { MarkunreadSharp } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Mclip, MDatePicker, MForm, MInput, MMonthPicker, MRadio,MselectSearch,MSnackbar,MuseForm} from "../../../components/myLib"
import { objectToSelectValue } from '../../../functions'

// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality ,f_phone,m_phone  

const initialFValues =  

    { 
        for_class:"",
        for_group:"",
        for_section:"",

        type:"",
        multiple:[],
        method:"s",

        subject:"",
        date:'',
        full_mark:"",
        examiner:"",
        marker:"",

        // marks
    }

  let   typeOptions = [
    {value:"1",title:"1st Semester"},
    {value:"2",title:"2st Semester"},
    {value:"3",title:"3st Semester"},
    {value:"4",title:"4st Semester"},
    {value:"monthly",title:"Monthly"},
    {value:"weekly",title:"Weekly"},

  ]


function AddExam(props) {


    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()
    const [multipleSubjectSelect,setmultipleSubjectSelect] = useState([])
    const [multipleAddError,setmultipleAddError] = useState([])
                  

    const [fetchData, setfetchData] = useState({
        subject:[],
        filetersubject:[],
        teacher:[],
        parents:[],
        class:[],
        group:[],
        section:[]
    })



    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = MuseForm(initialFValues);


    useEffect(async ()=>{ 

        setErrors({...errors,multiple:[]}) //naile default vabe multiple:""

        let subjects = await axios.get("/api/web/const/subject")
                                    .then(v=>{return v.data.value})
                                    .catch(e=>{ setmessage({status:e.response.status ,message:"Server Error Occured when subject fetch"})})

        let listobject = {
            ...fetchData,
            class:await objectToSelectValue( "academic","class"),
            subject:await subjects
        }

        setfetchData(listobject) 

    },[])

 

         


     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.post("/api/web/dash/exam/exam",{...values})
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


    console.log({fetchData,values});

    useEffect(async ()=>{
         


        values.for_class &&  axios.get("/api/web/dash/academic/class/"+values.for_class).then(v=>{
            console.log(v.data.value);
            setfetchData({...fetchData,group: v.data.value[0].group.map(v=>{return {value:v.name,title:v.name}})}) 
        })


        setValues({
            ...values,
            for_group:"",
            for_section:"",
            type:""
        })
              

 
  
     },[values.for_class])

     useEffect(async ()=>{
         


        if(!(values.type == "monthly") || !(values.type ==  "weekly")){
            setValues({
                ...values,
                for_section: ( !values.type )?"":"all"
            })
        } 

              

 
  
     },[values.type])

     
    useEffect(async ()=>{
         
        

        values.for_class &&  
        
        axios.get("/api/web/dash/academic/class/"+values.for_class).then(async v=>{
             


            let section =  ()=>{

                let returnVal = {}

                v.data.value[0].group.map((gc,i) =>{
                     gc.name == values.for_group &&( returnVal =  eval('v.data.value[0].group['+i+'].section.map(v=>{return {value:v.name,title:v.name}}) '))
                })
                return returnVal
            }
            let filterSubject =  ()=>{

                let returnVal = {}

                v.data.value[0].group.map((gc,i) =>{
                     gc.name == values.for_group &&( returnVal =  fetchData.subject.filter(x=>   gc.subject.indexOf(x.value) !== -1     ) )
                    //  gc.subject.indexOf(x.name) !== -1    
                })
                 return returnVal
            }
             
           
            values.for_group && setfetchData({  ...fetchData,section: await section() ,filetersubject: await filterSubject() })
      
            setValues({
                ...values,
                
                for_section:"",
                type:""
            })
              
           
        })
 
        
     },[values.for_group])

     
     let OnChangeMultipleSubject= (value)=>{

        setmultipleSubjectSelect(value.map(v=>v.value))


        
     }





     useEffect(async ()=>{ 
        setValues({
            ...values,
            multiple:multipleSubjectSelect.map(v=>{return {subject:v,  date:'', full_mark:"", examiner:"",  marker:""}})
        })
 
     },[multipleSubjectSelect])





     
     let multipleHandleChange = (e,i)=>{
        

        values.multiple[i][e.target.name] = e. target.value

        setValues({
            ...values,
            multiple:values.multiple

        })


     }


  
     return (
    < >
        {(!message) && 
            
            <MForm style={{ visibility:loading1 && "hidden"}} onSubmit={handleSubmit}>

                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >Basic Information</Typography>
                    </Grid>


                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Class"
                            name="for_class"
                            value={values.for_class}
                            options={fetchData.class}
                            onChange={handleInputChange}
                            error={errors.for_class}
 
                        >
                        </MselectSearch>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Group"
                            name="for_group"
                            value={values.for_group}
                            options={fetchData.group}
                            onChange={handleInputChange}
                            error={errors.for_group}
                            disabled={!values.for_class} 

 
                        >
                            
                        </MselectSearch>
                    </Grid>
                    
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Type"
                            name="type"
                            value={values.type}
                            options={typeOptions}
                            onChange={handleInputChange}
                            error={errors.type}
                            disabled={!values.for_class || !values.for_group} 
 
                        >
                        </MselectSearch>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Section"
                            name="for_section"
                            value={values.for_section}
                            options={[  {value:"all",title:"All"},...fetchData.section,  ]}
                            onChange={handleInputChange}
                            error={errors.for_section}
                            disabled={!values.for_class || !values.for_group || !((values.type == "monthly") || (values.type == "weekly") ) } 
 
                        >
                        </MselectSearch>
                    </Grid>
                     
                    <Grid item xs={12} sm={4} >
                        <MRadio
                            name="method"
                            label="Method"
                            items={[
                                { id: 's', title: 'Single' },
                                { id: 'm', title: 'Multiple' },
                            ]}
                            value={values.method}
                            onChange={handleInputChange}
                        />
                    </Grid>
             


                </Grid>
                {values.method == "s"  && values.type&& 
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
                    
          


                </Grid>
                }



               {values.method == "m" &&  values.type&& 
                <Grid container   >
                    
            
                   
                    <Grid item xs={12} sm={12}  >
                      
                      <Mclip

                          label="Choose Subjects"
                          options={fetchData.filetersubject}
                          value={multipleSubjectSelect}
                          onChange={(e,value)=>OnChangeMultipleSubject(value)}
                         
                       
                      />
 
                    </Grid>

                    {
                        values.multiple.map((v,i)=>
                        <div>
                            <Grid item xs={12} sm={12} >
                                <Typography variant="h6" style={{margin:"30px 8px 10px 8px"}} >{v.subject}</Typography>
                                <span>{errors.multiple[i] && errors.multiple[i].subject}</span>
                            </Grid>

                            <Grid item container  sm={12}   >

                            <Grid item xs={12} sm={6} >
                                    <MInput 
                                        label="Date"
                                        name="date"
                                        value={values.multiple[i].date}
                                        onChange={(e)=>multipleHandleChange(e,i)}
                                        error={errors.multiple[i] && errors.multiple[i].date}    
                                    >
                                    </MInput>
                                </Grid>
                                
                                <Grid item xs={12} sm={6} >
                                    <MInput 
                                        label="Full Mark"
                                        name="full_mark"
                                        value={values.multiple[i].full_mark}
                                        onChange={(e)=>multipleHandleChange(e,i)}
                                        error={errors.multiple[i] && errors.multiple[i].full_mark}
                                    >
                                    </MInput>
                                </Grid>
                                
                                <Grid item xs={12} sm={6} >
                                    <MInput 
                                        label="Marker"
                                        name="marker"
                                        value={values.multiple[i].marker}
                                        onChange={(e)=>multipleHandleChange(e,i)}
                                        error={errors.multiple[i] && errors.multiple[i].marker}
                                    >
                                    </MInput>
                                </Grid>
                                
                                  
                                <Grid item xs={12} sm={6} >
                                    <MInput 
                                        label="Examiner"
                                        name="examiner"
                                        value={values.multiple[i].examiner}
                                        onChange={(e)=>multipleHandleChange(e,i)}
                                        error={errors.multiple[i] && errors.multiple[i].examiner}
                                    >
                                    </MInput>
                                </Grid>
                                
                                

                            </Grid>
                        </div>)
                    }
                   

                 
              
                   
               </Grid>
       
               }
                
   
                
      
              
                <Button type="submit" disabled={values.method == "m" && values.multiple.length == 0 } variant="contained" >asdfasdfasdf</Button>
                
                    
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

export default AddExam
