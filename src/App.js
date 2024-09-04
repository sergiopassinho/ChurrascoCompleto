import React from 'react';
import Button from './components/Button/button';

function App() {
  return (
    <>
      <Button variant="primary" size="small" onClick={() => alert('Botão Pequeno Clicado!')}>
        Botão Pequeno
      </Button>

      <Button variant="secondary" size="medium" onClick={() => alert('Botão Médio Clicado!')}>
        Botão Médio
      </Button>

      <Button variant="tertiary" size="large" onClick={() => alert('Botão Grande Clicado!')}>
        Botão Grande
      </Button>

      <Button size="extraLarge" onClick={() => alert('Botão Extra Grandre Clicado!')} style={{backgroundColor: 'blue'}}>
        Botão Extra Grande 
      </Button>
    </>
  );
}

export default App;