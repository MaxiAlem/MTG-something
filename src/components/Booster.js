import React, {useContext, useState}from 'react'
import {MTGContext} from './MTGContext.js';
import { openBooster,boosterUrl } from '../helpers/api.js';


const Booster = () => {
    const {currSet,setCurrSet,boosterUrl} = useContext(MTGContext);
    const [booster,setBooster] = useState([])
  
     const openBooster = async ()=>{
      console.log(boosterUrl)

      try {
        const res = await fetch(boosterUrl)
        const data = await res.json()
        setBooster(data.cards)
        return(data.cards)
      } catch (error) {
        console.log('esta poronga no tira sobres')
      }
      
      }

      const showbooster = ()=>{
        if(booster.length > 0){
          return haybooster()
        }else{
          return <p>Boca la concha de tu madre</p>
        }
      }
      const haybooster=
        booster.map(card => {
          return (  <div>
             
          <p>{card.name}</p>
                  <img src={card.imageUrl}></img>
          </div>
         )
          console.log(card.name, card.imageUrl)
       });
       //console.log(booster)
      
      
  return (
    <div>
        <button 
            onClick={()=>{openBooster()}}>
                esto deberia empezar a tirar boosters algun dia</button>
            <div> hola soy un Booster {haybooster}</div>

    </div>
    
  )
}

export default Booster