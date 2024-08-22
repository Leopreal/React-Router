
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import Sobre from './pages/Sobre'

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
