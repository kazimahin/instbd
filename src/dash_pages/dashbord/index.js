import React, { useState } from 'react'
import { MselectSearch } from '../../components/myLib'

   
function Index() {


  const [state,setstate] = useState({search:"bangla"})

  let options = [
    {value:"1",title:"Asdf"}
  ]

  const onChange = (e)=>{
    console.log(e);
    setstate({[e.target.name]:e.target.value})
  }
 
   return (
    <div style={{height:"",width:" ",background:" "}}>
      <MselectSearch
        name="search"
        label="Demo"
        value={state.search}
        onChange = {onChange}
        options={
          [
            {value:"bangla",title:"Bangla"},
            {value:"english",title:"english"},
            {value:"math",title:"math"},
            {value:"chemisty",title:"chemisty"},
            {value:"physicsf",title:"physicsf"},
          ]
        }

      ></MselectSearch>
    </div>

  )
}

export default Index
