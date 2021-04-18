 
const initaialstate = {
    loading:true,
    available:true,
    value:null,

}


const WebBasic = (state=initaialstate,action) =>{

     switch (action.type){
        case "WebBasic":
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


 export default WebBasic