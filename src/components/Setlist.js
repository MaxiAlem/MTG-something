import React ,{useContext, useEffect, useState}from 'react'
import { getsets } from '../helpers/sets.js';
import {MTGContext} from './MTGContext.js';
import { boosterUrl, openBooster } from '../helpers/api.js';

const Setlist = () => {
  
  const {currSet,setCurrSet} = useContext(MTGContext)
  
  const [nameSet,setNameSet] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const fetchSets = async ()=>{
    try {
      const sets = await getsets();
      const promises = sets.map(async set =>{
       return await set 
        //return await (<p>{set.name}</p>)
      })
      const res = await Promise.all(promises)
      
      setNameSet(res)
      setLoading(false)
      
    } catch (error) {
      
    }
  }
  const loadSets= nameSet.map(set =>{

    return  <option key={set.code} value={set.code}>{set.name}-{set.code}</option>
   }
     
    );

  ;
  useEffect(() => {

    fetchSets()

    
  }, [loading])

   const onClick = async (e) => {
    e.preventDefault()
    //const data = await (currSet)
    
    //hay que mandar el set 
    boosterUrl(currSet)
  
    
    }

    const onChange =(e)=>{
      setCurrSet(e.target.value)
    }
return (
    <>

    <form >
      <div>
        <input id="search" 
                  type="search" 
                  placeholder="select a set"
                  list="setlist"
                  autoComplete="off"
                  onChange={onChange}/>

      </div>    
      <div className='searchbar-btn'>
            <button
              onClick={onClick}        
              >
              select</button>
      </div>
    </form>
    <datalist id="setlist">
          {loading ? <option value='cargandio sets'>Cargando sets....</option>
                    : loadSets
          
                      
            }
    </datalist>
        
      
        
        </>
        
  )
}

export default Setlist