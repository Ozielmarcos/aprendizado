var imagemCachorro = './assets/cachorro.jpg';
var imagemGato = './assets/gato.jpg';

export default function CardAnimal(props) {
    return (
        <div id="CardAnimal">
            <img src={props.tipoAnimal === 'cachorro' ? imagemCachorro : imagemGato} alt='animal' />
        </div>
    )
}