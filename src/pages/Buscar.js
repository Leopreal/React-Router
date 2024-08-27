import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch"

const Buscar = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const {data: items, loading, error} = useFetch(url)




  return (
    <div>
        <h1>Resultados</h1>
        <ul className='produtos'>
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            {/* rota dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Buscar