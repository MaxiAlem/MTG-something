
import React ,{useState, createContext,useEffect} from "react";
import { baseUrl } from "../helpers/api";

const MTGContext = createContext()

const MTGCont = ({children}) => {
    const [currSet, setCurrSet] = useState('')
    const [boosterUrl,setBoosterurl] = useState('')

    useEffect(() => {
      setBoosterurl(`${baseUrl}/sets/${currSet}/booster`)
    }, [currSet])
    

    const context = {
        currSet,setCurrSet,boosterUrl,setBoosterurl
    }

  return (
    <MTGContext.Provider value={context}>
      {children}
    </MTGContext.Provider>
  )
}

export default MTGCont
export {MTGContext}