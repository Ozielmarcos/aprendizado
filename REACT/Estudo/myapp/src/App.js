import './App.css';
import { useState } from 'react';
import CardAnimal from './componentes/CardAnimal';
import CardInformacao from './componentes/CardInform';
import Topo from './componentes/Topo';


function App() {

  const [tipoDoComponenteCard, setTipoComponenteCard] = useState('cachorro');

  return (
    <div className='App'>

      <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoComponenteCard} />

      <CardAnimal tipoAnimal={tipoDoComponenteCard} />

      <CardInformacao tipoAnimal={tipoDoComponenteCard} />

    </div>
  );
}

export default App;
