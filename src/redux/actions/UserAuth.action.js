import {server} from "../../functions/axios"







const UserAuth=   ()=>{
    return   dispatch =>{



        server.post("/auth/verify",{} )
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