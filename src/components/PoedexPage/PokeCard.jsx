import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../../styles/card.css'

const PokeCard = ({pokeinfo}) => {

    const [poke, getCard] =useFetch(pokeinfo.url)
    
    useEffect(()=>{
            getCard()
    },[])

      const navigate = useNavigate()
      const handlePoketDetail =()=>{
         navigate(`/pokedex/${pokeinfo.name}`)
      }
      
  return (
    <article onClick={handlePoketDetail} className={`card border--${poke?.types[0].type.name} bg--${poke?.types[0].type.name}`}>
        <header>
            <img src={poke?.sprites.other['official-artwork'].front_default} alt="" /> 
        </header>
        <section className='name-container'>
        <h2 className={`color--${poke?.types[0].type.name}`}>{poke?.name}</h2>
            <ul>
              {
                poke?.types.map(item=>(
                    <li key={item.type.url}>{item.type.name}</li> 
                ))  
              }
            </ul>
 
        </section>
        <hr />
        <section className='feature-container'>
          <ul>
            {
              poke?.stats.map(item =>(
                <li key={item.stat.url}>
                    <span className='item--stat'>{item.stat.name}</span>
                    <span className='item--base'>{item.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </section>
    </article>
  )
}

export default PokeCard