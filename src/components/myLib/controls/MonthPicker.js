import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from '@material-ui/core';

export  function MMonthPicker(props) {
    const useStyle = makeStyles((theme)=>({
        input:{

            "& .MuiFormLabel-root":{
                transform:"translate(0, 1.5px) scale(0.75)",
                transformOrigin:"top left"
            }
            
           
        }
    }))


    const classes = useStyle()



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
                 
                className={value && classes.input}
            />
            <p className="short_error">{error && error}</p>

        </MuiPickersUtilsProvider>
    )
}
