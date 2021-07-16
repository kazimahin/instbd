import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, label, value, onChange ,variant ,error = null,...other} = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker  variant="inline" inputVariant={variant ? variant :"standard"} //disableToolbar
                label={label}
                format="dd/mm/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                {...other}
                // {...(error && {error:true,helperText:error})}
            />
            <p className="short_error">{error && error}</p>

        </MuiPickersUtilsProvider>
    )
}
