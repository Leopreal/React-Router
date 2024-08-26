import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/UseFetch'
import { Link } from 'react-router-dom'

const Produto = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

    
  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* rasted routes */}
            <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
        </div>
    )}
    </>
  )
}

export default Produto