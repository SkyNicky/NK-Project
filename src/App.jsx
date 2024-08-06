import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home.jsx';
import About from './Componentes/About';
import BoloDeCoxinha from './Componentes/BoloDeCoxinha.jsx';
import PudimDeChocolate from './Componentes/PudimDeChocolate.jsx';
import CuscuzDeTapioca from './Componentes/CuscuzDeTapioca.jsx';
import PastelDeBrigadeiro from './Componentes/Pastel.jsx';
import PanquecaDoce from './Componentes/Crepe.jsx';
import RocamboleDePeru from './Componentes/Rocambole.jsx';
import './stylesglobal.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="receita/bolo-de-coxinha" element={<BoloDeCoxinha />} />
          <Route path="receita/pudim-de-chocolate" element={<PudimDeChocolate />} />
          <Route path="receita/cuscuz" element={<CuscuzDeTapioca />} />
          <Route path="receita/pastel" element={<PastelDeBrigadeiro />} />
          <Route path="receita/crepe" element={<PanquecaDoce />} />
          <Route path="receita/rocambole" element={<RocamboleDePeru />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
