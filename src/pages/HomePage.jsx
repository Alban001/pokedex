import React from 'react'
import FromTrainer from '../components/HomePage/FromTrainer'
import '../styles/homePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-container'>
        <img src="/poked.png" alt="pokedex logo" />
        <h2>Hi! Trainer</h2>
        <p>To see the information of the pokemon, tell me your trainer name</p>
        <FromTrainer />
      </div>
    </div>
  )
}

export default HomePage