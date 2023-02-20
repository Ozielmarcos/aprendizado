import { useState } from 'react';
import './App.css';
import Topo from './componentes/Topo/Topo';
import SecaoBanner from './componentes/secaoBanner/secaoBanner';
import SecaoTrabalho from './componentes/secaoExperienciaTrabalho/secaoTrabalho';
import Footer from './componentes/Footer/Footer';

function App() {

  const [temaAtual, setTema] = useState('claro');

  const AlterarTema = () => {
    temaAtual === 'claro' ? setTema('dark') : setTema('claro');
  }

  return (
    <div className='App'>
      <Topo tema={temaAtual} clickAlterarTema={AlterarTema} />
      <SecaoBanner tema={temaAtual} />
      <SecaoTrabalho tema={temaAtual} />
      <Footer tema={temaAtual} />
    </div>
  );
}

export default App;
