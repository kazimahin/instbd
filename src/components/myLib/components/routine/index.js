import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Grid, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { MselectSearch, MTimePicker } from '../../';

import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
import DoneIcon from '@material-ui/icons/Done';
import {valueToTitle} from "../../../../functions"


export  function Mroutine(props) {
  let hcolor = props.hcolor


   let {data , setData  } = props
 

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor:hcolor ? hcolor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);
    const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });
  
   const classes = useStyles();




   const [tempvalue,settempvalue] = useState({start:new Date(),end:new Date()})
   const [tempvalueerr,settempvalueerrr] = useState({})
   const [onoff,setonoff] = useState({})


  //  console.log({data,tempvalue,onoff,tempvalueerr})





    let maxlength = 0
   Object.keys(data).map(v=>{

 
    data[v].map((v2,i2)=>{

       (Object.keys(v2).length !== 0  ) &&  i2 > maxlength && (maxlength =  i2)
 
    })
    // data[v].length > maxlength && ( maxlength = data[v].length)
   })
 

  const handleChange = (e)=>{
    settempvalue({...tempvalue,[e.target.name]:e.target.value});
    if(tempvalueerr[e.target.name]){

      delete tempvalueerr[e.target.name]
      settempvalueerrr({...tempvalueerr})

    } 
  }


  const fieldSubmit = (i,i2)=>{
    //validation
    if(!tempvalue){
      setonoff({})

    }else{

      let stratHours = new Date( tempvalue.start).getHours() 
      let startMinutes = new Date( tempvalue.start).getMinutes()
      let startTime = eval(stratHours+"."+startMinutes)

      let endHours = new Date( tempvalue.end).getHours()
      let endMinutes = new Date( tempvalue.end).getMinutes()
      let endTime = eval(endHours+"."+endMinutes)
console.log(tempvalue.end);
      let lendTime = 0     
      let nstartTime = 25

      data[Object.keys(data)[i]].map((v,i)=>{
        let e_time = new Date((v.end != null && v.end )? v.end : 0)
        v.end && (i2 > i)  && ( eval(e_time.getHours()+"."+e_time.getMinutes()) > lendTime  ) && (lendTime = eval(e_time.getHours()+"."+e_time.getMinutes()))

        let s_time = new Date((v.start != null && v.start ) ? v.start : 0)
        v.start && (i2 < i)  && ( eval(s_time.getHours()+"."+s_time.getMinutes()) < nstartTime  ) && (nstartTime = eval(s_time.getHours()+"."+s_time.getMinutes()))
      })
       
      if(!tempvalue.subject){
        tempvalueerr.subject = "subject is empty"
      }
      if(!tempvalue.teacher){
        tempvalueerr.teacher = "teacher is empty"
      }
      if(!tempvalue.start){
        tempvalueerr.start = "start date is empty"
        
      }else if(startTime < lendTime){
        tempvalueerr.start = "value is smaller then last end"
      }
      if(!tempvalue.end){
        tempvalueerr.end = "end date is empty"
      }else if(endTime <= startTime){
        tempvalueerr.end = "end time is small"
      }else if(endTime > nstartTime){
        tempvalueerr.end = "end time is large"
      }

      settempvalueerrr({...tempvalueerr})
      console.log({lendTime,nstartTime,startTime,endTime,tempvalueerr})

    }
    //main work
    if(Object.keys(tempvalueerr).length == 0){
      data[Object.keys(data)[i]][i2] = tempvalue

      setData({
        ...data,
  
      })
      settempvalue({
         start :new Date(),
         end:new Date()
      })
  
      setonoff({})
    }



  }



  const fieldDelete = (i,i2)=>{
    
    data[Object.keys(data)[i]][i2] = {}
    setData({
      ...data,
    })

    settempvalue({})
    setonoff({}) 
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          {    
                [...Array(maxlength+4)].map((v,i)=>{
                  return i == 0 ?<StyledTableCell >Days</StyledTableCell> : <StyledTableCell style={{textAlign:"center"}} >{i}</StyledTableCell>

                })
                  
          }
          </TableRow>
        </TableHead>
 
        <TableBody>
          {Object.keys(data).map((v,i)=>(

            <StyledTableRow key={i}>
              <StyledTableCell  component="th" scope="row">{v}   </StyledTableCell>
              {[...Array(maxlength+3)].map((v2,i2)=>{
                return  <StyledTableCell  component="th" scope="row">
                          { (data[v][i2] && Object.keys(data[v][i2]).length !== 0 )  ? 

                              <div style={{minWidth:"150px"}} >
                                
                             

                                {(!onoff[i.toString()+i2.toString()]) ?
                                  <div  style={{textAlign:"center"}}>
                                    {/* subject value to title  */}
                                    {valueToTitle(props.subject,data[v][i2].subject)}
                                    <br></br>
                                    {valueToTitle(props.teacher,data[v][i2].teacher)}
                                    <br></br>
                                    { new Date(data[v][i2].start).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") +" - "+ new Date(data[v][i2].end).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3") }
                                    <br></br>
                                    <IconButton onClick={()=>{setonoff({[i.toString()+i2.toString()]:true});settempvalueerrr({}); settempvalue({...data[v][i2]})}} style={{padding:"5px"}}><EditIcon></EditIcon> </IconButton>

                                  </div>
                                :
                                  <div>
                                    <Grid style={{minWidth:"200px",display:"flex" ,padding:"5px",maxWidth:"250px",margin:"0 auto"}} container>
                                      <Grid item xs={12}>
                                        <MselectSearch
                                         
                                        name="subject"
                                        label="Subject"
                                        value={tempvalue.subject}
                                        onChange={handleChange}
                                        options={props.subject}
                                        error={tempvalueerr.subject}

                                        ></MselectSearch>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MselectSearch
                                         
                                        name="teacher"
                                        label="Teacher"
                                        value={tempvalue.teacher}
                                        onChange={handleChange}
                                        options={props.teacher}
                                        error={tempvalueerr.teacher}

                                        ></MselectSearch>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MTimePicker
                                          name="start"
                                          label="Start Time"
                                          value={tempvalue.start}
                                          onChange={handleChange}
                                          error={tempvalueerr.start}
                                         >
                                        </MTimePicker>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MTimePicker
                                          name="end"
                                          label="End Time"
                                          value={tempvalue.end}
                                          onChange={handleChange}
                                          error={tempvalueerr.end}
                                         >
                                        </MTimePicker>
                                      </Grid>
                                      <div style={{margin:"0 auto"}}>

                                        <br></br>
                                        <IconButton style={{padding:"5px"}} aria-label="" onClick={()=>setonoff({})}>
                                          <ClearIcon></ClearIcon>
                                        </IconButton>

                                        <IconButton style={{padding:"5px"}}  aria-label="" onClick={()=>fieldDelete(i,i2)} >
                                          <DeleteIcon></DeleteIcon>
                                        </IconButton>

                                        <IconButton  type="submit"  disabled={ Object.keys(tempvalueerr).length !== 0}  style={{padding:"5px"}} aria-label="" onClick={()=>fieldSubmit(i,i2)}  >
                                          <DoneIcon></DoneIcon>
                                        </IconButton>


                                      </div>
 
                                    </Grid>
                              
                                  
                                    </div>
                                }

                                 
                              </div> 
                              :
                              <div>
                                {(!onoff[i.toString()+i2.toString()]) ?
                                <div  style={{textAlign:"center",width:"100%"}} >
                                  <IconButton  onClick={()=>{setonoff({[i.toString()+i2.toString()]:true}) ; settempvalue({end:new Date(),start:new Date()}); settempvalueerrr({})}}><AddIcon></AddIcon></IconButton>
                                </div>
                                :
                                  <div>
                                    <Grid  style={{minWidth:"200px",display:"flex" ,padding:"5px",maxWidth:"250px",margin:"0 auto"}} container>
                                      <Grid item xs={12}>
                                        <MselectSearch
                                         
                                          name="subject"
                                          label="Subject"
                                          value={tempvalue.subject}
                                          onChange={handleChange}
                                          options={props.subject}
                                          error={tempvalueerr.subject}

                                        ></MselectSearch>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MselectSearch
                                         
                                        name="teacher"
                                        label="Teacher"
                                        value={tempvalue.teacher}
                                        onChange={handleChange}
                                        options={props.teacher}
                                        error={tempvalueerr.teacher}

                                        ></MselectSearch>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MTimePicker
                                          name="start"
                                          label="Start Time"
                                          value={tempvalue.start}
                                          onChange={handleChange}
                                          error={tempvalueerr.start}
                                        >
                                        </MTimePicker>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <MTimePicker
                                          name="end"
                                          label="End Time"
                                          value={tempvalue.end}
                                          onChange={handleChange}
                                          error={tempvalueerr.end}
                                        >
                                        </MTimePicker>
                                      </Grid>
                                      <div style={{margin:"0 auto"}}>

                                        <br></br>
                                        <IconButton style={{padding:"5px"}} aria-label="" onClick={()=>setonoff({})}>
                                          <ClearIcon></ClearIcon>
                                        </IconButton>

                                        <IconButton style={{padding:"5px"}}  aria-label="" onClick={()=>{settempvalue({start:new Date(),end:new Date()}) ; ; settempvalueerrr({})}  }>
                                          <CachedIcon></CachedIcon>
                                        </IconButton>

                                        <IconButton type="submit"  disabled={ Object.keys(tempvalueerr).length !== 0}   style={{padding:"5px"}} aria-label="" onClick={()=>fieldSubmit(i,i2)}  >
                                          <DoneIcon></DoneIcon>
                                        </IconButton>


                                      </div>
  
                                    </Grid>
                              
                                  
                                    </div>
                                }
                          
                              </div>
                                
                          }
                        </StyledTableCell>
              })}
         
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
