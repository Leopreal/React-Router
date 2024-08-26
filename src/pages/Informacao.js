import React from 'react'
import { useParams } from 'react-router-dom'

const Informacao = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>Mais informaçoes do produto: {id}</h1>
    </div>
  )
}

export default Informacao