import Header from '../../components/Header'
import Style from './Perfil.module.css'
import perfil from '/perfil.png';

function Perfil() {

    return (
        <>
            <Header />

            <div className={Style.all}>

            <div className={Style.CardUsuario}>
                <h1 className={Style.h1Titulo}>Leitora</h1>
                <h3 className={Style.h3Nivel}>Conta Nível Prata</h3>
                <div className={Style.Usuario}>
                    <img src={perfil} className={Style.FotoPerfil} alt="Foto de Perfil" />
                    <ul className={Style.Lista}>
                        <li>Giovanna Momesso</li>
                        <li>Leitora desde 2019</li>
                        <li>Já leu, 110 livros</li>
                    </ul>
                </div>
                <h3 className={Style.h3Sobre}>Sobre</h3>
                <p className={Style.pSobre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem qui beatae tenetur, quos dolorum placeat magni nostrum, distinctio dolorem aliquid atque itaque ratione vero necessitatibus in? Accusamus ullam quis aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione reiciendis numquam, repellat autem blanditiis perferendis, similique, excepturi reprehenderit debitis assumenda illum. Dolor repellat quisquam quo quidem dolore? Mollitia, qui. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, tenetur! Fuga cum omnis, natus odio quasi tenetur ipsa eligendi voluptas aperiam deserunt dolorem? Ducimus facilis excepturi voluptates reprehenderit, id nemo!</p>
            </div>

            <div className={Style.navbarPerfil}>
                <ul className={Style.ulUsuario}>
                    <li className={Style.li}> <a href=""></a>Informações</li>
                    <li className={Style.li}><span className={Style.Livros}>Livros Lidos </span></li>
                    <li className={Style.li}>Pontos</li>
                    <li className={Style.li}>Seguindo</li>
                    <button onClick={() => console.log('Sair clicked')} className={Style.Sair}>Sair</button>
                </ul>
            </div>

            </div>
        </>
    )
}

export default Perfil