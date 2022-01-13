import React, { useEffect, useState } from 'react'
import { MselectSearch } from '../../components/myLib'
import {objectToSelectValue} from  "../../functions/index"

   
 function Index () {


 
  const [state,setstate] = useState()


  useEffect(async ()=>{
    setstate(
      await objectToSelectValue("user","parents")
    )
  


  },[])

 
   return (
    <div style={{height:"",width:" ",background:" "}}>
        {
          console.log(state)
        }
    </div>

  )
}

export default Index




// {
//   ["One","Tow","Three","Four","Five","Six","Seven","Eight"].map((v,i)=>{
//        return (

//           <div style={{ background: i % 2 == 0 && "#fafafa",borderTop:"3px solid gray",borderBottom:"1px solid gray"}} >
//               <MAccordingDetails    header={<Typography style={{fontWeight:"900"}} variant="body1" color="initial">{v}</Typography>}   >
//                   <div style={{flexDirection:"column",width:'100%'}}>

//                   <div  style={{borderTop:"1px solid gray"}} >
//                               <MAccordingDetails    header={<Typography variant="body1"    color="initial">Scinece</Typography>}   >


//                                   <div  style={{flexDirection:"column",width:'100%'}}>

//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">1st Semester</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">2 nd sermester</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">Monthly</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
                                      
//                                   </div>

//                               </MAccordingDetails>
//                           </div>
                      
//                           <div  style={{borderTop:"1px solid gray"}} >
//                               <MAccordingDetails    header={<Typography variant="body1"    color="initial">Scinece</Typography>}   >


//                                   <div  style={{flexDirection:"column",width:'100%'}}>

//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">1st Semester</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">2 nd sermester</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
//                                       <div>
//                                           <MAccordingDetails    header={<Typography variant="body1"    color="initial">Monthly</Typography>}   >
//                                               Scinece
//                                           </MAccordingDetails>
//                                       </div>
                                      
//                                   </div>

//                               </MAccordingDetails>
//                           </div>
                      
//                   </div>

//               </MAccordingDetails>
//           </div>

//       )
//   })
// }
