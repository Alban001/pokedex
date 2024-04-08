import React, { useRef } from 'react'
import { setTrainer } from '../../store/state/trainer.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../styles/formTrainer.css'

const FromTrainer = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const trainerRef = useRef()
    const handleSubmit =(e)=>{
         e.preventDefault()
         dispatch(setTrainer(trainerRef.current.value.trim()))
         navigate('/pokedex')
    }

  return (
    <form className='form-trainer' onSubmit={handleSubmit}>
        <input ref={trainerRef} type="text" />
        <button>Let Start</button>
    </form>
  )
}

export default FromTrainer