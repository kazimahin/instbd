import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
 
export default function SelectSearch(props) {

    // const { name, label, value,error=null, onChange, options ,variant } = props;
    const {options , onChange , label ,value ,error ,name} = props

    let value1   


    
    options.map(v2=>{
            value == v2.value && (value1= v2)
     })
     
    console.log({options , onChange , label ,value ,error ,name , value1});


    const ChangeValueToTarget=(e,value)=>{
        let params = {target:{value:value ? value.value :"" ,name:props.name}}

        onChange(params)
    }
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={options}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={label} variant="standard" />}
                onChange={(e,value)=>ChangeValueToTarget(e,value)}
                value={value1}
                // name={name}
            />
            {error && <FormHelperText>{error}</FormHelperText>}

        </div>

    )
}
 