import {server} from "../../functions/axios"
 

 

 
const WebBasic=()=>{
    return dispatch =>{

        
 
        server.post("/site/basic" )
        .then(value=>{
             if(value != null){
                 dispatch({
                    type:"WebBasic",
                    payload:{
                        value:value.data.value,
                        available:false,
                        loading:false,
                     }
                })


            }else{
 
                dispatch({
                    type:"WebBasic",
                    payload:{
                        value:false,
                        available:true,
                        loading:false,
                    }
                })
            }
            
        
        })
        .catch(err=>{
 
            dispatch({
                type:"WebBasic",
                payload:{
                    value:false,
                    avaliable:true,
                    loading:false,
                }
            })
        
        })


     }


}


export default WebBasic


