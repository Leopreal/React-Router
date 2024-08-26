
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Produto from './pages/Produto'
import Informacao from './pages/Informacao';
import NaoEncontrado from './pages/NaoEncontrado'

//componentes
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/products/:id' element={<Produto />}/>
          <Route path='/products/:id/info' element={<Informacao/>}/>
          <Route path='*' element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
