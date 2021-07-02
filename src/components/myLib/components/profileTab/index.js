
import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'; 
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import {MActiveAvatar} from "../"
import Skeleton from '@material-ui/lab/Skeleton';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

 
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}







const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop:"10px",
    backgroundColor: theme.palette.background.paper,
  },
  Tab:{
    background: `${theme.palette.primary.light}2c`
  },
  name:{
    marginTop:"10px",
    [theme.breakpoints.down('sm')]: {
      textAlign:"center"
      
    },

  },
  idspan:{
    "&:hover":{
      textDecoration:"underline"
    }
  }

}));











// sideElement , name , id ,img ,activeColor ,

export  function MProfileTab(props) {





  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  
  return (
    <>
    
            {
              (!props.loading) && 
              <div className={classes.root}>
                  <AppBar style={{background:"inherit"}} position="static" color="default">
                    <Grid container  >
            
                      <Grid container  item lg={6} md={12} >
                          <Grid item md={4} xs ={12}>
                            <MActiveAvatar dotColor={props.activeColor} src={props.img}  style={{margin:"25px auto" }} size={100}></MActiveAvatar>
            
                          </Grid>
                          <Grid item xs={12} md={8}  className={classes.name}  style={{padding:"25px"}}> 
                            <Typography  variant="h4">{props.name}</Typography>
                            <Typography variant="h6">ID: <span  className={classes.idspan} > {props.id} </span> <span style={{color:"gray"}}>{props.catagory}</span> </Typography>
                          </Grid>
                          
                      </Grid>
                        
                      <Grid container item lg={6} display={{ xs: 'none', md: 'none', lg: 'block' }} >
                          
                            {props.sideElement}
                      </Grid>
            
                    </Grid>
            
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="on"
                      indicatorColor="primary"
                      textColor="primary"
                      aria-label="scrollable force tabs example"
                      className={classes.Tab}
                    >
            
            
            
            
                      {
                        props.data.map((v,index)=><Tab label={v.name} icon={<i class={v.icon} style={{fontSize:"1.5rem"}}></i>} {...a11yProps(index)} />)
                      }
                
            
                    </Tabs>
                  </AppBar>
        
        
        
                  {
                    props.data.map((v,index)=><TabPanel value={value} index={index}>{v.component} </TabPanel>)
                  }
           
            </div>
            }


            {
                (props.loading) && 
                <Skeleton  style={{transform:"none",marginTop:"10px",marginBottom:"10px"}}  height={400} >
                     
                </Skeleton>

            }
    </>
    

 

  );
}
