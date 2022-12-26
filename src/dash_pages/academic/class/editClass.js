import { Button, Checkbox, CircularProgress, FormControlLabel, Grid, IconButton, Typography } from '@material-ui/core'
import { Group, MarkunreadSharp, PhotoCamera } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {MAccordingDetails, Mclip, MDatePicker, MForm, MInput, Mmenu, MMonthPicker, MRadio,MSelect,MselectSearch,MSnackbar} from "../../../components/myLib"
import WebBasic from "../../../redux/actions/WebBasic.action"
import AddIcon from '@material-ui/icons/Add';
import { sub } from 'date-fns'
import { objectToSelectValue } from '../../../functions'
// name ,qualification ,birth ,phone ,phone2 ,email ,nid ,nationality ,gender ,religion ,blood ,p_address ,p_city ,p_zip ,c_address ,c_city ,c_zip ,password ,
//subject, designation ,startdate, sallary ,f_name,f_nid,f_nationality ,m_name ,m_nid ,m_nationality ,f_phone,m_phone  


const Groups=["default","scieance","arts","commerce"]
const Section=["default","A","B"]

// let recoverGroup = []




const initialFValues = {

    name :null,
    teacher:null,
    session:null,
    group:[
       {
           name:"default",
           teacher:null,
           fees:null,
           subject:[],
           section:[
               {
                   name:"default",
                   teacher:null,
                   routine:null
                   // students:[]
               }
           ]
       }
   ]

}






function EditClass(props) {




    const [subjects, setsubjects] = useState([])
    const [fetchData, setfetchData] = useState({
        subject:[],
        teacher:[],
        session:[],
        routine:[]
    })

    useEffect(async()=>{

        axios.get("/api/web/const/subject")
            .then(v=>{
                setsubjects([...v.data.value])
            })
            .catch(e=>{
                setmessage({status:e.response.status ,message:"Server Error Occured when subject fetch"})            
            }) 
        axios.get("/api/web/dash/academic/class/"+props.id)
            .then(v=>{
                setValue(v.data.value[0]) 
                setErrors({
                    ...Errors,
                    group:v.data.value[0].group.map(a=>{
                        return{section: a.section.map(b=>{
                            return {}
                        })}
                    })
                })
                
            })
            .catch(e=>{
                 
                setmessage({status:e.response.status ,message:"Server Error Occured when subject fetch"})            
            })



        


        let object = {
            session: await objectToSelectValue("academic","session"),
            teacher: await objectToSelectValue("user","employee"),
            routine: await objectToSelectValue("academic","routine"),
        }
    
        setfetchData({...fetchData,...object})
    
    },[])

 









    
    
    const dispatch = useDispatch()

    const [loading1,setloading1] = useState(false)
    const [message,setmessage] = useState()

    const [Value, setValue] = useState(initialFValues )
    const [Errors, setErrors] = useState(initialFValues)
 
     
    const handleSubmit = e => {

        setloading1(true)
        e.preventDefault()

        axios.put("/api/web/dash/academic/class/"+props.id,Value)
            .then(v=>{


                console.log(v);
                setloading1(false)


                props.alert(<MSnackbar key={Math.random()} catagory="success">Data Updated succesfully</MSnackbar>)
                props.reload(Math.random())
                props.dialog("")

                dispatch(WebBasic())

            })
            .catch(e=>{

                console.log(e.response.data);
                setloading1(false)

                if(e.response.status == 400){
                    setErrors({...e.response.data.err})
                }else{
                    setmessage({status:e.response.status ,message:"Server Error Occured"})

                }
                
                
            })

        
    }



    //class

    const handleInputChange = e =>{
        setValue({
            ...Value,
            [e.target.name]:e.target.value
        })
        setErrors({
            ...Errors,
            [e.target.name]:""
        })

    }
 
    //Group
    
    const DeleteGroup =(index)=>{
        var newGroup = Value.group.filter((v,i)=> i!== index )
        newGroup.length == 0 &&( newGroup = [ { name:"default", teacher:"", fees:"", subject:[], section:[ { name:"default", teacher:"" } ] } ])
         setValue({
            ...Value,
            group:newGroup
        })
        
        setErrors({
            ...Errors,
            group:Value.group.map((v,i)=>{
                return { section:v.section.map(v2=>{return {}}) }
            })
        })
    }
    const OnchangeGroup=(e)=>{
        Value.group.push({
            name:e.target.name,
            teacher:"",
            fees:"",
            subject:[],
            section:[
                {
                    name:"default",
                    teacher:"",
                    routine:""
                    // students:[]
                }
            ]
        })

        let newGroup =  Value.group.filter(group => group.name != "default")

        setValue({
            ...Value,
            group:newGroup
        })

        setErrors({
            ...Errors,
            group:Value.group.map((v,i)=>{
                return { section:v.section.map(v2=>{return {}}) }
            })
        })

    }

 
    const valueChangeGroup =(e,i)=>{


        console.log({Value,Errors});
         
        Value.group[i][e.target.name] = e.target.value

        setValue({
            ...Value,
            group:Value.group
        })
        
        


       Errors.group[i][e.target.name] = null

        setErrors({
            ...Errors,
            group:Errors.group
        })

    }




    //section

    const OnchangeSection=(e,i)=>{
        Value.group[i].section.push({
            name:e.target.name,
            teacher:"",
            routine:""
        })

        let newSection =  Value.group[i].section.filter(section => section.name != "default")
        
        Value.group[i].section = newSection
      
        setValue({
            ...Value,
            group:Value.group
        })


       
        setErrors({
            ...Errors,
            group:Value.group.map((v,i)=>{
                return { ...Errors.group[i], section:v.section.map(v2=>{return {}}) }
            })
        })

 
    }




    const valueChangeSection =(e,gi,si)=>{

         
        Value.group[gi].section[si][e.target.name] = e.target.value
        Errors.group[gi].section[si][e.target.name] = null

        setValue({
            ...Value,
            group:Value.group
        })


        setErrors({
            ...Errors,
            group:Errors.group
        })



    }


    const DeleteSection =(gi,si)=>{
        var newSection = Value.group[gi].section.filter((v,i)=> i!== si )


        newSection.length == 0 &&( newSection = [ { name:"default", teacher:"" , routine:"" } ])

        Value.group[gi].section = newSection

         setValue({
            ...Value,
            group:Value.group
        })


        setErrors({
            ...Errors,
            group:Value.group.map((v,i)=>{
                return { ...Errors.group[i], section:v.section.map(v2=>{return {}}) }
            })
        })

 
    }
   

    //subject 

    const setSubject =(e,value,gi)=> {

        Errors.group[gi].subject  = null
 
        setErrors({
            ...Errors,
            group:Errors.group
        })


        Value.group[gi].subject = value.map(v=>v.value)

        setValue({
            ...Value,
            group:Value.group
        })
   

     }

     
    
    return (
    < >
        {(!message) && 
            
            <MForm style={{ visibility:loading1 && "hidden" , background:""}} onSubmit={handleSubmit}>
                {console.log({Value,Errors})}
                <Grid container   >
                    
                    <Grid item xs={12} sm={12} >
                        <Typography display="inline" variant="h6" color="initial">Class Information</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} >

                        <MInput
                            label="Class Name"
                            name="name"
                            value={Value.name}
                            onChange={handleInputChange}
                            error={Errors.name}
                            id={1}
                        >
                        </MInput>
                    </Grid>
     
                    <Grid item xs={12} sm={4} >

                        <MselectSearch 
                            label="Class Teacher"
                            name="teacher"
                            value={Value.teacher}
                            onChange={handleInputChange}
                            options={fetchData.teacher}

                            error={Errors.teacher}
                            id={1}
                        >
                        </MselectSearch>
                    </Grid>
     
             
                    <Grid item xs={12} sm={4} >
                        <MselectSearch 
                            label="Session"
                            name="session"
                            value={Value.session}
                            onChange={handleInputChange}
                            options={fetchData.session}
                            error={Errors.session}
                            id={3}
 
                        >
                        </MselectSearch>
                    </Grid>
                    
 


                    <Grid item xs={12} sm={12} >

                        <Typography display="inline" variant="h6" color="initial">Add Group</Typography>
                        <Mmenu 
                            value={
                                {
                                    button:<IconButton color="primary" aria-label="upload picture" component="span"> <  AddIcon /> </IconButton> ,
                                    list:Groups.map(v=>{
                                        
                                        let check = false
                                        let disable = false
                                        Value.group.map(v2=>{ if(v2.name == v  ){ check = true ;disable = true } })

                                        if(v == "default"){return null}
                                        return  <FormControlLabel
                                                    control= {  
                                                        <Checkbox 
                                                            defaultChecked= {check} 
                                                            color="primary"  
                                                            inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                                            disabled={disable}
                                                            name={v}
                                                            onChange={OnchangeGroup}
                                                        /> 
                                                    }
                                                    label={v}
                                                    style={{padding:"5px"}} 
                                                />
                                    })
                                }
                            } 
                        />

                        {
                            Value.group.map((v,i)=>{
                                return  (
                                <div style={{margin:"10px" ,background:"#ebebeb24"}}>
                                    <MAccordingDetails  
                                        button={
                                            <>
                                                <Button disabled={Value.group[0].name == "default"} onClick={()=>DeleteGroup(i)} variant="outlined" color="primary" >Delete</Button> 
                                                <Button disabled={false} variant="outlined" color="warn">Reset</Button> 
                                            </>
                                        } 
                                        header={<Typography variant="body1" color="initial">{v.name}</Typography>} 
                                    >


                                                                                        
                                        <Grid container>

                            
                                            <Grid item xs={12} sm={4} >

                                                <MselectSearch
                                                    label="Group Teacher"
                                                    name="teacher"
                                                    options={fetchData.teacher}
                                                    value={Value.group[i].teacher}
                                                    onChange={(e)=>valueChangeGroup(e,i)}
                                                    error={Errors.group[i] && Errors.group[i].teacher}
                                                  >
                                                </MselectSearch>
                                            </Grid>



                                            <Grid item xs={12} sm={4} >

                                                <MInput
                                                    label="Fees"
                                                    name="fees"
                                                    type="number"
                                                    value={Value.group[i].fees}
                                                    onChange={(e)=>valueChangeGroup(e,i)}
                                                    error={Errors.group[i]  && Errors.group[i].fees}
                                                 >
                                                </MInput>
                                            </Grid>


                         
                                            

                                            <Grid item xs={12} sm={4}  >
                      
                                                <Mclip
                                                    label="Subjects"
                                                    options={subjects}
                                                    value={Value.group[i].subject}
                                                    onChange={(e,value)=>setSubject(e,value,i)}
                                                    error={Errors.group[i]  && Errors.group[i].subject }
                                                
                                                />


                                             
                                            </Grid>

                                            


                                            <Grid item xs={12} sm={12} >

                                                <Typography display="inline" variant="h6" color="initial">Add Section</Typography>

                                                <Mmenu 
                                                    value={
                                                        {
                                                            button:<IconButton color="primary" aria-label="upload picture" component="span"> <  AddIcon /> </IconButton> ,
                                                            list:Section.map(sv=>{
                                                                
                                                                let check = false
                                                                let disable = false
                                                                Value.group[i].section.map(sv2=>{ if(sv2.name == sv  ){ check = true ;disable = true } })

                                                                if(sv == "default"){return null}
                                                                return <FormControlLabel
                                                                            control= {  
                                                                                <Checkbox 
                                                                                    defaultChecked= {check} 
                                                                                    color="primary"  
                                                                                    inputProps={{ 'aria-label': 'secondary checkbox' }} 
                                                                                    disabled={disable}
                                                                                    name={sv}
                                                                                    onChange={(e)=>OnchangeSection(e,i)}
                                                                                /> 
                                                                            }
                                                                            label={sv}  
                                                                            style={{padding:"5px"}}
                                                                        />
                                                            })
                                                        }
                                                    } 
                                                />

                                                {
                                                    Value.group[i].section.map((sv,si)=>{
                                                        return  <div style={{margin:"15px" ,background:"#8181811c"}}>
                                                                    <MAccordingDetails  
                                                                        button={
                                                                            <>
                                                                                <Button disabled={Value.group[i].section[0].name == "default"} onClick={()=>DeleteSection(i,si)} variant="outlined" color="primary" >Delete</Button> 
                                                                                <Button disabled={false} variant="outlined" color="warn">Reset</Button> 
                                                                            </>
                                                                        } 
                                                                        header={<Typography variant="body1" color="initial">{sv.name}</Typography>} 
                                                                        
                                                                    >


                                                                                                                            
                                                                        <Grid container>
                                                                            
                                                                            <Grid item xs={12} sm={4} >
                                                                
                                                                                <MselectSearch
                                                                                    label="Section Teacher"
                                                                                    name="teacher"
                                                                                    options={fetchData.teacher}
                                                                                    value={Value.group[i].section[si].teacher}
                                                                                    onChange={(e)=>valueChangeSection(e,i,si)}
                                                                                    error={Errors.group[i]  && Errors.group[i].section[si]  && Errors.group[i].section[si].teacher}
                                                                                 >
                                                                                </MselectSearch>
                                                                            </Grid>

                                                                            <Grid item xs={12} sm={4} >
                                                                                <MselectSearch
                                                                                    label="Section Routine"
                                                                                    name="routine"
                                                                                    options={fetchData.routine}
                                                                                    value={Value.group[i].section[si].routine}
                                                                                    onChange={(e)=>valueChangeSection(e,i,si)}
                                                                                    error={Errors.group[i]  && Errors.group[i].section[si]  &&  Errors.group[i].section[si].routine}
                                                                                 >
                                                                                </MselectSearch>
                                                                            </Grid>

                                                                            <Grid item xs={12} sm={4} >
                                                                                student
                                                                            </Grid>

                                                                        </Grid>
                                                                        
                                                                    </MAccordingDetails>
                                                                </div>

                                                    })
                                                }
                                            </Grid>


                                        </Grid>
                                        

                                    
                                    </MAccordingDetails>
                                </div>)

                            })
                        }



                    </Grid>


 
                    
                     
                    
                </Grid>

                <Button type="submit" variant="contained" >Submit</Button>
                
                    
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

export default EditClass
