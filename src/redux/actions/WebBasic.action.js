import axios from "axios"
 


const subdomain_in_dev = window.location.host.split('.')[0] 
const domain =( process.env.REACT_APP_MODE === "DEV")? 

                                                subdomain_in_dev+"."+process.env.REACT_APP_DOMAIN
                                                    : 
                                                document.location.host

 
const WebBasic=()=>{
    return dispatch =>{

        
 
        axios.post(window.location.origin+"/api/web/site/basic",{domain},{withCredentials:true} )
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


