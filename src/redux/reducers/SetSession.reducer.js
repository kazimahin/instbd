 
let initaialstate ={
    current:null,
    today:null
}

const SetSession = (state=initaialstate,action) =>{

     switch (action.type){
        case "SetSession":
            return {
                
                ...state,
               ...action.payload
            }
         
        default:
            return {
                ...state,

                 
            }
    }
}


 export default SetSession