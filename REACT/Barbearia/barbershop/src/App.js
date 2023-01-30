
import './App.css';
import '../src/componentes/style.css'

function App() {
  return (
    <>
      <body className="modo-escuro">
        <header>
          <div className='limita-secao'>
            <div className='topo'>
              <img src='./assets/barbearia-logo.png' alt='logo da barbearia' width="100" />
              <button><img src="./assets/sun.png" alt="modo claro" width="20" />Light </button>
            </div>
          </div>
        </header>
        <section>
          <div className='banner'></div>
          <div className='limita-secao'>
            <div className='conteudo'>
              <h1>Bem-vindo a Barber Shop</h1>
              <p><span>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</span></p>
              <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
              <p className='signature'>S. Kelly</p>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;
