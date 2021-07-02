import { Breadcrumbs, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles(theme => ({
 
    root:{
        display:"flex",
        alignItems:"center",
        marginTop:"20px",
        marginBottom:"10px",
    },
    Breadcrumbs:{
        flexGrow:"1",
        padding:"20px",
      
        color:theme.palette.primary,
         "& a":{
            color:theme.palette.text.primary,
            textDecoration:"none"
        },
        "& a:hover":{
            color:theme.palette.text.primary,
            textDecoration:"underline"
        }
        
    },
    button:{
        paddingRight:"40px"
    },
    button1:{
        transform:" scale(-1, 1)"
    },
    button2:{
        // padding:"20px"
    }
}))


export function MRouteView(props) {


    const classes = useStyles()
    
    return (
        <>
            {
                (!props.loading) && 
                <Paper className={classes.root} >
                    <Breadcrumbs className={classes.Breadcrumbs}  aria-label="breadcrumb">
                        {
                            (!props.routes)?<Link >/</Link>:(
                                props.routes.map(v=>{
                                    return  <Link to={v.link}>{v.name}</Link>

                                })
                            )
                        }

                    
                        
                    </Breadcrumbs>
            
                    <div className={classes.button} >
                        <IconButton className={classes.button1} onClick={ ()=> window.history.back()}  > <i class="fas fa-share"></i></IconButton>
                        <IconButton className={classes.button2} onClick={ ()=> window.history.forward()}  > <i class="fas fa-share"></i></IconButton>
                    </div>
               
                </Paper>  
            }

            {
                (props.loading) && 
                <Skeleton  style={{transform:"none",marginTop:"20px",marginBottom:"10px"}}  height={64} >
                     
                </Skeleton>

            }
        
        </>
            
    )
}

 
