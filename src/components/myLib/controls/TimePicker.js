import React, { useState } from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function TimePicker(props) {

    const { name, label, value, onChange ,variant ,error = null,...other} = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    const [state, setstate ] = useState(value)

    const hereOnchange = (e)=>{
        console.log({onchange:e});
        setstate(e.target.value)
    }

    const onsubmit = () =>{
        console.log({onsubmit:state});
         
        onChange(convertToDefEventPara(name,state))
    }


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            
            <KeyboardTimePicker  variant="inline" inputVariant={variant ? variant :"standard"} 
                margin="normal"
                id="time-picker"
                label={label}
                name={name}
                value={state}
                onChange={date =>hereOnchange(convertToDefEventPara(name,date))}
                // onAccept={date =>onChange(convertToDefEventPara(name,date))}
                onClose={onsubmit}
                KeyboardButtonProps={{
                    "aria-label": "change time"
                }}
                {...other}
                
            />
            <p className="short_error">{error && error}</p>
        </MuiPickersUtilsProvider>
    )
}
