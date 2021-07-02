import React from 'react'
import { TextField } from '@material-ui/core';

export default function MSelectInput(props) {

    const { name, label, value,error=null, onChange, variant, ...other } = props;
    return (
        <TextField
            variant={variant ? variant :"standard"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
