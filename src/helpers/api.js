


const baseUrl = 'https://api.magicthegathering.io/v1'

 

 const boosterUrl=async (set)=>{//lo traemos desde SEtlist para trabajar aca
   
   return(`${baseUrl}/sets/${set}/booster`)
 }

 const openBooster =async (url) =>{
   console.log(typeof(url))
   try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)// data
   } catch (error) {
      console.log(error)
   } 
 }
 export {
    baseUrl,
    boosterUrl,
    openBooster
 }