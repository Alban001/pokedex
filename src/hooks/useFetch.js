import axios from 'axios'
import { useState } from 'react'

const useFetch=(url)=>{
  
    const [response, setresponse] = useState()

    // accede a una api cualquiera
    const getApi =()=>{
        axios.get(url)
    .then(res => setresponse(res.data))
    .catch(err => console.log(err))
    }

    // accede a una api y extrae datos

    const getApiType=(urlType)=>{
        axios.get(urlType)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(item => item.pokemon)
            }
            setresponse(obj)
        })
        .catch(err=> console.log(err))
    }

    return [response, getApi, getApiType]
}

export default useFetch