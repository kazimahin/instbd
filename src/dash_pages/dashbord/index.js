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
