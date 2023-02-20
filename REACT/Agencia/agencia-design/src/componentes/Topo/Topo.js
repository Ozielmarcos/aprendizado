
import './topo.css';


export default function Topo(props) {

    const lua = '../assets/moon.png';
    const sol = '../assets/sun.png';

    return (
        <header className={props.tema === 'claro' ? 'claro' : 'dark'}>
            <img className='logo' src='../assets/logo.png' alt='logo da agência' />
            <button onClick={props.clickAlterarTema}
                className={props.tema === 'claro' ? 'btn-claro' : 'btn-dark'}>
                <img src={props.tema === 'claro' ? lua : sol} alt={props.temaAtual} /></button>
        </header>
    )

}