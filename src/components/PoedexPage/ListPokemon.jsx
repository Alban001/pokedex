import React from 'react'
import PokeCard from './PokeCard'
import '../../styles/pokeCard.css'
import { useEffect } from 'react'
import { useState } from 'react'

const ListPokemon = ({ pokemon, startIndex, endIndex, quantityPages, setpage, page }) => {

  const [arrPages, setarrPages] = useState([])

  const [blockPage, setblockPage] = useState(1)
  const [pagesPerBlcok, setblockPerBlog] = useState(5)

  const initialBlockPage = (blockPage -1) * pagesPerBlcok
  const endPageBlock = initialBlockPage + pagesPerBlcok

  useEffect(()=>{
      const newBlock = Math.ceil(page / pagesPerBlcok)
      if(newBlock !== blockPage){
        setblockPage(newBlock)
      }
  },[page])


  useEffect(() => {
    const arrayPivot = []
    for (let i = 1; i <= quantityPages; i++) {
      arrayPivot.push(i)
    }
    setarrPages(arrayPivot)
  }, [quantityPages])


  const handlePrevious =()=>{
        setpage(page - 1)
  }

  const handleNext =()=>{
    setpage(page + 1)
  }
const changePage =number=>{
  setpage(number)
}
  return (
    <div>
      <ul className='container-ul'>
        <button disabled={page === 1 && true} onClick={handlePrevious}>&lt;</button>
        {
          arrPages.slice(initialBlockPage, endPageBlock).map(item => (
            <li className={item === page && 'active-page'} onClick={()=> changePage(item)} key={item}>{item}</li>
          )
          )
        }
        <button disabled={page === quantityPages && true} onClick={handleNext}>&gt;</button>
      </ul>
      <div className='pokeCard'>
        {
          pokemon?.slice(startIndex, endIndex).map(index => (
            <PokeCard
              key={index.url}
              pokeinfo={index}

            />
          ))
        }
      </div>
    </div>

  )
}

export default ListPokemon