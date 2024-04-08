import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch.js' 
import '../../styles/selectedType.css'

const SelecType = ({setTypeSelected}) => {

    const url ='https://pokeapi.co/api/v2/type'

    const [types , getTypes] = useFetch(url)

    useEffect(()=>{
      getTypes()
    },[])

     const handleChange =(e)=>{
      setTypeSelected(e.target.value)
     }

  return (
    <select  onChange={handleChange}>
            <option className='selectedType' value='allPokemons'>All options</option>
            {
              types?.results.map(item=>(
                <option key={item.url} value={item.url}>{item.name}</option>
              ))
            }
    </select>
  )
}

export default SelecType