import axios from "axios"

const objectToSelectValue =  async (catagory,name)=>{

    let value = await axios.get(`/api/web/dash/${catagory}/${name}`)
      .then(v=>{
         return v.data.value
      })


    let newValue = await value.map(v=>{
          return {value:v.id , title:`${v.id} - ${v.name ? v.name : v.f_name} `}
      })
   



    return   newValue
  }
   
  export { objectToSelectValue}