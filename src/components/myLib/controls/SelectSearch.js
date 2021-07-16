import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
 


export default function SelectSearch(props) {

     const {options , onChange , label ,value ,error ,name ,variant} = props

 
     let valuex = {}



     options.map((v2,i)=>{
        if(value == v2.value ){
            valuex = v2
        }        

    })
    // useEffect(async()=>{
        
    //     let valueFunc= async (value)=>{
    //         let find = false 
    //         let index = null
    //         let wait = await options.map((v2,i)=>{
    //             if(value == v2.value ){
    //                 index = i
    //                 find = true 
    //             }        

    //         })
            
    //         if(wait && find ){
                
    //             return options[index]
    //         }else{
                
    //             return {}
    //         }
    //     }


    //     let defaultValue = await valueFunc(value)
    //     setdValue(defaultValue)
     
    // },[])

 
    const ChangeValueToTarget=(e,value)=>{
        let params = {target:{value:value ? value.value :"" ,name:props.name}}

        onChange(params)
    }

     return (
         <>
             <Autocomplete
                 
                  
                 id="combo-box-demo"
                options={options}
                getOptionLabel={(option) => option.title  ? option.title : ""}
                 
                renderInput={(params) =><>    <TextField {...params} disableAnimation label="asdf" variant="standard" /></>}
                onChange={(e,value)=>ChangeValueToTarget(e,value ? value : "")}
                  
                value={ valuex }
                 
                  
            />
            <p className="short_error">{error && error}</p>

        </>
  
 
 
    )
}
 