import './banner.css';

export default function SecaoBanner(props) {
    return (

        <section className='banner'>
            <div className='bannerImagem' id={props.tema === 'claro' ? 'tema-claro' : 'tema-dark'}></div>
            <div className='conteudo-banner'>
                <p className='destaque'>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2 className='subtitulo-banner'>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>

    )
}