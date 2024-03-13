import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Campo from './Campo';
import Cooperativismo from './Cooperativismo';
import Logo from './LogoJac.png';
import Reciclaje from './Reciclaje';

const categories = [
  { id: 1, name: 'Campo', color: '#4ac0e4' }, // Celeste
  { id: 2, name: 'Reciclaje', color: '#ffa500' }, // Naranja
  { id: 3, name: 'Cooperativismo', color: '#800080' }, // Violeta
];

const CategorySelection = () => {
  return (
    <div className="App">
      <h1>PREGUNTADOS</h1>
      <h2>Selecciona una categoría</h2>
      <div className="categorias">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/${category.name.toLowerCase()}`}
            className="spiral"
            style={{ backgroundColor: category.color }}
          >
            {category.name}
          </Link>
        ))}
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<CategorySelection />} />
      <Route path="/campo" element={<Campo />} />
      <Route path="/cooperativismo" element={<Cooperativismo />} />
      <Route path="/reciclaje" element={<Reciclaje />} />
    </Routes>
     <footer>
        <img src={Logo} alt="Logo" />
     </footer>
    </div>
  );
};

export default App;
