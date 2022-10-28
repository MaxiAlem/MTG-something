
import { baseUrl} from './api.js'


const  getsets=async ()=>{
    const seturl =`${baseUrl}/sets`

  try {
    const res = await fetch(seturl);
    const data = await res.json()
    const sets = await data.sets
    return(sets)//.forEach(set=>{ 
      // <p>{set.name.value}</p>
      //  }
      //  ))
  } catch (error) {
    console.log(error)
  }
   }

 const addsetList =(sets)=>{
  
  return(
    //así se veria
    sets.forEach(set=>{
    <p>set.name</p>
    }
    ))
  }

 export {getsets,addsetList}