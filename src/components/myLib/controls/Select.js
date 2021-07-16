import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value,error=null, onChange, options ,variant } = props;

    return (
        <FormControl   variant={variant ? variant :"standard"}
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            <p className="short_error">{error && error}</p>
        </FormControl>
    )
}
