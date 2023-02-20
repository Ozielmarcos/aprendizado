import './footer.css';

export default function Footer(props) {
    return (
        <footer className={props.tema === 'claro' ? 'footer-claro' : 'footer-dark'}>
            <img src='../assets/logo.png' alt='logo da agência' />

            <div className='rodape'>
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                <nav>
                    <a href='https://www.facebook.com.br'><img src='../assets/facebook.png' alt='facebook' /></a>
                    <a href='https://www.twitter.com'><img src='../assets/twitter.png' alt='twitter' /></a>
                    <a href='https://www.linkedin.com.br'><img src='../assets/linkedin.png' alt='linkedin' /></a>
                    <a href='https://www.dribble.com'><img src='../assets/dribble.png' alt='dribble' /></a>
                    <a href='https://www.behance.net'><img src='../assets/behance.png' alt='behance' /></a>
                    <a href='https://www.google.com.br'><img src='../assets/google-plus.png' alt='google-plus' /></a>
                </nav>
            </div>

            <div className='direitos'>
                <p>© Copyright 2023 - <span className='dev'>Oziel Marcos</span></p>
            </div>

        </footer>
    )
}