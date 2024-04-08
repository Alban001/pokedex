import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import ListPokemon from '../components/PoedexPage/ListPokemon'
import SelecType from '../components/PoedexPage/SelecType'
import '../styles/pokedex.css'

const Pokedex = () => {

  const trainer = useSelector(state => state.trainer)

  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const url = '//pokeapi.co/api/v2/pokemon?limit=2000&offset=0'

  const [pokemon, getPokemon, getPokeByType] = useFetch(url)

  const inputRef = useRef()
  const [pokemonSearch, setPokemonSerach] = useState('')
  const pokemonFiltered = pokemon?.results.filter(poke => {
    return poke.name.includes(pokemonSearch)
  })
  const [page, setpage] = useState(1)
  const [pokePerPage, setpokePerPage] = useState(4)

  const startIndex = (page -1) * pokePerPage
  const endIndex = page * pokePerPage
  const quantifyPokex = pokemonFiltered ? pokemonFiltered.length : 0
  const quantityPages = Math.ceil(quantifyPokex/pokePerPage)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemon()
    } else {
      getPokeByType(typeSelected)
    }7
    setpage(1)
  }, [typeSelected])


  

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonSerach(inputRef.current.value.trim().toLowerCase())
    setpage(1)
  }

  return (
    <section className='pokedex-container'>
      <div className='pokedex-logo'><img src="/poked.png" alt="pokedex logo" /><div className='black-sector'></div></div>
      <p><span>Welcome {trainer} </span>, here you can find your favorite Pokemon!</p>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type='text' />
          <button>Search</button>
        </form>
        <SelecType setTypeSelected={setTypeSelected} />
      </div>

      <ListPokemon pokemon={pokemonFiltered} startIndex={startIndex} endIndex={endIndex} quantityPages={quantityPages} setpage={setpage} page={page}/>
    </section>
  )
}

export default Pokedex