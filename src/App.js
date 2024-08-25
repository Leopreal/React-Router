
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Produto from './pages/Produto'

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
          <Route path='/produto/:id' element={<Produto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
