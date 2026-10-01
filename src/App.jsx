import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tytul, setTytul] = useState('');
  const [autor, setAutor] = useState('');
  const [gatunekWartosc, setGatunekWartosc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let nazwaGatunku = '';
    switch (gatunekWartosc) {
      case '1': nazwaGatunku = 'Powieść'; break;
      case '2': nazwaGatunku = 'Kryminał'; break;
      case '3': nazwaGatunku = 'Fantastyka'; break;
      case '4': nazwaGatunku = 'Biografia'; break;
      default: nazwaGatunku = '';
    }

    console.log(`tytul: ${tytul}; autor: ${autor}; gatunek: ${nazwaGatunku}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="tytulKsiazki" className="form-label">Tytuł książki</label>
          <input 
            type="text" 
            className="form-control" 
            id="tytulKsiazki" 
            value={tytul}
            onChange={(e) => setTytul(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="autorKsiazki" className="form-label">Autor książki</label>
          <input 
            type="text" 
            className="form-control" 
            id="autorKsiazki"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gatunek" className="form-label">Gatunek</label>
          <select 
            className="form-select" 
            id="gatunek"
            value={gatunekWartosc}
            onChange={(e) => setGatunekWartosc(e.target.value)}
          >
            <option value="">Wybierz gatunek</option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default App;