import './card.css';

export default function Card(props) {
    return (
        <div className='container-card'>

            <div id='card' className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>
                <p className='data'>JUNHO 2012 - 2016</p>
                <h3 className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>Web Designer</h3>
                <p className='empresa'>Pied Piper StartUp.</p>
                <p className='paragrafo'>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
            </div>

            <div id='card' className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>
                <p className='data'>AGOSTO 2016 - 2019</p>
                <h3 className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>Product Designer</h3>
                <p className='empresa'>E Corp.</p>
                <p className='paragrafo'>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra</p>
            </div>

            <div id='card' className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>
                <p className='data'>FEVEREIRO 2019 - 2021</p>
                <h3 className={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}>Digital Consulting</h3>
                <p className='empresa'>Arasaka Inc.</p>
                <p className='paragrafo'>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução</p>
            </div>
        </div >
    )
}