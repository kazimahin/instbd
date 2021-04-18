import axios from "axios"
axios.defaults.withCredentials = true






const UserAuth=   ()=>{
    return   dispatch =>{



          axios.post(window.location.origin+"/api/web/auth/verify",{},{withCredentials:true} )
        .then(  value=>{ 
            console.log(value);
             dispatch({
                type:"UserAuth",
                payload:{
                    auth:value.data.valid,
                    ...value.data.data,
                    cheak:true
                }
            })
        
        })
        .catch(err=>{
            dispatch({
                type:"UserAuth",
                payload:{
                    auth:false,
                    catagory:null,
                    email:null,
                    cheak:true
                }
            })
        
        })


     }


}


export default UserAuth