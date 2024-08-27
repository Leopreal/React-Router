import { useNavigate } from "react-router-dom"

import { useState } from "react"





const SearchForm = () => {
    const navegacao = useNavigate()
    const [busca, setBusca] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navegacao('/search?q=' + busca)
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setBusca(e.target.value)}/>  {/* pegando o valor do input e setando em setBusca */}
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm