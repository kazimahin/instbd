import React from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroup(props) {

    const { name, label, value, onChange, items ,error } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio color="primary" />} label={item.title} />
                        )
                    )
                }
            </MuiRadioGroup>
            <p style={{color:"#f44336",float:"left" ,fontSize:"0.75rem"}}>{error && error}</p>

        </FormControl>
    )
}
