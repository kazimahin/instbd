/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export function Mclip(props) {

    const {options , onChange , label ,value , error} = props
    let value1  =[] 
    value.map(v=>{
         options.map(v2=>{
             v == v2.value && value1.push(v2)
        })
    }) 

   return (

    <div>
        <Autocomplete
            value = {value1}
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(option, { selected }) => (
            <React.Fragment>
            <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
            />
            {option.title}
            </React.Fragment>
        )}
         
        renderInput={(params) => (
            <TextField {...params} variant="standard" label={label} placeholder="Favorites" />
        )}

        onChange= {(e,newValue)=>onChange(e,newValue)}
        />
        <p className="short_error">{error && error}</p>

    </div>
  );
}
 