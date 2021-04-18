 
const initaialstate = {
         auth:false,
        email:null,
        catagory:null,
        cheak:false
 }


const UserAuth = (state=initaialstate,action) =>{
    switch (action.type){
        case "UserAuth":
            return {...state,...action.payload}
         
        default:
            return {...state}
    }
}
    

 export default UserAuth