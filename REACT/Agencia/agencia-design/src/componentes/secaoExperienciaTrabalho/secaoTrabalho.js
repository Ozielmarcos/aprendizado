import './trabalho.css';
import Card from "../Card/Card";

export default function SecaoTrabalho(props) {
    return (

        <section id='section-trabalho' className={props.tema === 'claro' ? 'trabalho-claro' : 'trabalho-dark'}>
            <div className='limita-secao'>

                <h2 id='subtitulo' className={props.tema === 'claro' ? 'subtitulo-claro' : 'subtitulo-dark'}>Experiências De Trabalho</h2>

                <p className='descricao'>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>

            </div>
            <Card temaCard={props.tema} />
        </section>

    )
}