import { Grow, IconButton, Zoom } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MDialog, MRouteView, MSnackbar, MSpeedDial, MTable} from "../../../components/myLib"
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddStudent from "./addStudent.js"
import EditStudent from "./editStudent"
import DeleteStudent from "./deleteStudent"
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
function List() {

    const data = []
    const [Dialog,setDialog] = useState()
    const [snackbar,setsnackbar] = useState( )
    const [GetValue,setGetValue] = useState([])
    const [loading,setloading] = useState(true)
    const [reload,setreload] = useState(0)
  

     
   const addfunc = ()=>{
        setDialog(
            <MDialog
                key={new Date().toString()}
                children={
                <AddStudent
                 
                    reload={setreload}
                    alert={setsnackbar}
                    dialog={setDialog}
                
                />
                }
                title= {`Student Regestration`}
            />
        )
    } 
  
    const editfunc = (id)=>{
        setDialog(
            <MDialog
                key={new Date().toString()}
                children={
                    <EditStudent 

                        reload={setreload}
                        alert={setsnackbar}
                        dialog={setDialog}
                        id={id}

                    
                    />
                }
                title= {`Edit Id :${id}`}
            />
        )
    }




    const deletefunc = (id,name)=>{
        setDialog(
            <MDialog
                key={Math.random()}
                children={
                    <DeleteStudent
                    

                        reload={setreload}
                        alert={setsnackbar}
                        dialog={setDialog}
                        id={id}
                        name={name}

                    

                    />
                }
                // title= {`Delete Id :${id}`}
            />
        )
    }



    useEffect(()=>{

        setloading(true)

        axios.get("/api/web/dash/user/student/")
            .then(v=>{
                console.log({mahina:v});

                v.data.value.map((v1,index)=>{


                    var notun = {
                        id:[v1.id,`/d/user/student/${v1.id}`],
                        name:v1.name,
                        f_name:"father",
                        class:"class",
                        group:"group",  
                        section:"sec",  
                        "action":<div> <IconButton style={{padding:"5px"}} onClick={()=>editfunc(v1.id)}><EditIcon >edit</EditIcon></IconButton>   <IconButton  style={{padding:"5px"}}  onClick={()=>deletefunc(v1.id,v1.name)} ><DeleteIcon   >delete</DeleteIcon></IconButton></div>,
                     }
                    data.push(notun)
        
        
                })
        
                setGetValue(data)
                setloading(false)
            })
            .catch(e=>{
                setDialog( 
                    <MDialog
                        key={new Date().toString()}
                        children={"error occured when data fetch"}
                        // title= {`error `} 
                    />
                )  
                setloading(false)
            })
    },[reload])
 
 
 
 


    
    const headCells = [
        { id: 'id', label: 'Id' },
        { id: 'name', label: 'Name' },
        { id: 'f_name', label: 'Fathers Name' },
        { id: 'class', label: 'Class' },
        { id: 'group', label: 'Group' },
        { id: 'section', label: 'Section' },
        { id: 'action', label: 'Action', disableSorting: true },

    ]


 
    return (
        <>
            <MRouteView
                routes={[
                    {name:"user"},
                    {name:"student"}
                ]}
                loading={loading}
                
            />
 
            <MTable
                    key={Math.random()}
                    data={GetValue}
                    headCells={headCells}
                    loading={loading}    
            /> 
            {/* <pre>{GetValue.toString()}</pre> */}

            <MSpeedDial 
            
                value={[
                    { icon: <AddIcon />, name: 'Add Student' ,action:()=>addfunc() },
                    { icon: <SaveIcon />, name: 'Save' ,action:()=>alert("save") },
                    { icon: <PrintIcon />, name: 'Print' ,action:()=>alert("print") },
                    { icon: <ShareIcon />, name: 'Share',action:()=>alert("share") },
                    { icon: <FavoriteIcon />, name: 'Like' ,action:()=>console.log("Link") },
                  ]}

            />


           

            {Dialog}  {/*  dialog */}
            {snackbar} {/* snackbar */}

        </>





    )
}

export default List
