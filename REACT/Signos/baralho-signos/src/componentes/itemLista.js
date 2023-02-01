import './style.css';


export default function ItemLista(props) {

    return (

        <>
            <div className="container">
                <h2>{props.signo}</h2>
                <div className='box-img'> <img src={props.imagem} alt={props.signo} /> </div>
                <div className='datas'>
                    {props.dataInicio} - {props.dataFim}
                </div>
            </div>

        </>

    )
}