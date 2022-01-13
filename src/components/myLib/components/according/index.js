import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background:"inherit"
   },
 
 
  details: {
    alignItems: 'center',
  },
 
  
   
}));

export  function MAccordingDetails(props) {
  const classes = useStyles();

  return (
    <div  >
      <Accordion expanded={props.expanded} defaultExpanded={props.defaultExpanded}  className={classes.root}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          style={{background:props.headerBG && props.headerBG}}
        >
          {props.header}
        </AccordionSummary>
        <Divider />

        <AccordionDetails className={classes.details} style={{background:props.contentBG && props.contentBG}} >

          {props.children}
           
        </AccordionDetails>
        
     

        {props.button && <> <Divider /><Divider /><Divider /><Divider /><Divider /> <AccordionActions style={{background:props.buttonBG && props.buttonBG}}> {props.button} </AccordionActions> </>}
      </Accordion>
    </div>
  );
}
