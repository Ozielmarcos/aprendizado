
export default function CardInformacao(props) {

    let nomeAnimalCachorro = 'cachorro';
    let nomeAnimalGato = 'gato';
    let informacaoCachorro = 'É um mamífero carnívoro da familia dos canídeos.';
    let informacaoGato = 'É um mamífero carnívoro da familia dos felídeos.';

    return (
        <div className="CardInformacao">
            <h3>Informação sobre o {props.tipoAnimal === 'cachorro' ? nomeAnimalCachorro : nomeAnimalGato}</h3>
            <p>{props.tipoAnimal === 'cachorro' ? informacaoCachorro : informacaoGato}</p>
        </div>
    )
}