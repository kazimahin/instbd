import React from 'react'
import { makeStyles, TextField } from '@material-ui/core';

export default function MSelectInput(props) {

    const useStyle = makeStyles((theme)=>({
        input:{

            "& .MuiFormLabel-root":{
                transform:"translate(0, 1.5px) scale(0.75)",
                transformOrigin:"top left"
            }
            
           
        }
    }))


    const classes = useStyle()

    const { name, label, value,error=null, onChange, variant, ...other } = props;
    return (
        <>
            <TextField
            
                variant={variant ? variant :"standard"}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...other}
                className={ value &&  classes.input}
                // {...(error && {error:true,helperText:error})}
            />
            <p className="short_error">{error && error}</p>

                        
                        
        
        </>

    )
}
