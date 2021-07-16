 

const valueToTitle =(options,value)=>{
  return  Array.isArray(options) && options.filter(v=>v.value == value)[0] && options.filter(v=>v.value == value)[0].title
}
 
export { valueToTitle}