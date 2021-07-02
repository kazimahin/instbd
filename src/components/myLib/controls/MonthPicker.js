import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export  function MMonthPicker(props) {

    const { name, label, value, onChange ,variant ,error=null ,...other} = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker  variant="inline" inputVariant={variant ? variant :"standard"} //disableToolbar
                label={label}
                // format="mm/yyyy"
                views={["year", "month"]}

                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                {...other}
                {...(error && {error:true,helperText:error})}
            />
        </MuiPickersUtilsProvider>
    )
}
