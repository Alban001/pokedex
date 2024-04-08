import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../styles/detailContainer.css'

const PokeDetail = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])
  console.log(pokemon)
  return (
    <div className='detail-container'>
      <div className='container'>
        <header className={`bg--${pokemon?.types[0].type.name}`}>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div className='id-container'>
          <li className={`color--${pokemon?.types[0].type.name}`}>
            {pokemon?.id}
          </li>

        </div>
        <h2 className={`color--${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <div className='charact-container'>
          <p><span>Height: </span> <span>{pokemon?.height}</span></p>
          <p><span>Weight: </span> <span>{pokemon?.weight}</span></p>
        </div>
        <hr className='hr-container' />

        <div className='tipe-container'>
          <div className='li-container-1'>
            <h3>Type </h3>
            <div className='row1'>
              <li>{pokemon?.types[0].type.name}</li> <li> {pokemon?.types[0].type.name}</li>
            </div>
          </div>
          <div className='li-container-2'>
            <h3>Hability</h3>
            <div className='row2'>
              <li ><span>{pokemon?.abilities[0].ability.name}</span></li>
              <li>{pokemon?.abilities[1].ability.name}</li>
            </div>
          </div>
        </div>

        <div className='stat'>
          <h3>Stats </h3>
          {
            pokemon?.stats.map(item => (
              <>
                <div  className='stat-container'>
                  <div className='stat1'>
                    <p>{item.stat.name}</p>
                  </div>
                  <div className='stat2'>
                    <p>{item.base_stat}</p>
                  </div>
                </div>
                <div style={{"width":`${item.base_stat}%`}}  className='progress'  ><div className='child-progress'></div></div>
              </>
            ))
          }
        </div>
      </div>
      <div className='movements'>
        <h2>Movements</h2>
        <br className='br-mov' />
        <div className='move'> 
          {
            pokemon?.moves.map(item => (
              <li key={Math.random()}>{item.move.name}</li>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PokeDetail