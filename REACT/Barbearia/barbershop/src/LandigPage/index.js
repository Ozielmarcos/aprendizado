import './style.css';
import { useState } from 'react';


export default function LandingPage() {

    const botaoDark = 'btn-escuro';
    const botaoLight = 'btn-claro';

    const spanDark = 'Dark';
    const spanLight = 'Light';

    const imgLua = 'assets/moon.png';
    const imgSol = 'assets/sun.png';

    const modoLight = 'modo-claro';
    const modoDark = 'modo-escuro';

    const [tema, alteraTema] = useState(true);
    const [btnAtual, setBtn] = useState(true);
    const [spanAtual, setNovoSpan] = useState(true);
    const [srcImagem, setNovoImg] = useState(true);

    const mudaTema = () => {
        alteraTema(!tema);
        setBtn(!btnAtual);
        setNovoSpan(!spanAtual);
        setNovoImg(!srcImagem);
    }

    return (

        <>
            <body className={tema ? modoLight : modoDark}>
                <header>
                    <div className='limita-secao'>
                        <div className='topo'>
                            <img src="assets/barbearia-logo.png" alt='logo da barbearia' />
                            <div className='btn'>
                                <button className={btnAtual ? botaoDark : botaoLight}
                                    onClick={mudaTema}> <img src={srcImagem ? imgLua : imgSol} alt='imagem do botão' />
                                    <span>{spanAtual ? spanDark : spanLight}</span> </button>
                            </div>
                        </div>
                    </div>
                </header>

                <section className='banner'></section>

                <section className='container'>

                    <div className='limita-secao'>
                        <h1>Bem-vindo a Barber Shop</h1>
                        <p><strong>Nossa barbearia sempre oferece profissionais de qualidade
                            e estamos prontos para lidar com suas maiores expectativas.
                        </strong></p>
                        <p className='texto'>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe
                            premiada que demonstrou o talento de mestres barbeiros em vários concursos
                            de estilo. Deixe nosso barbeiro ser seu estilista pessoal, e você nunca ficará
                            desapontado.
                        </p>

                        <p className='assinatura'>Sr. Kelly</p>
                    </div>

                </section>
            </body>
        </>

    )
}