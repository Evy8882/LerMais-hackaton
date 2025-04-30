import Header from '../../components/Header'
import Style from './Pontos.module.css'

function Pontos() {

  return (
    <>
    <Header/>

    <div className={Style.all}>
      <h1 className={Style.h1Nivel}>Nível</h1>
      <img src="./Nivel.png" className={Style.imgNivel} alt="Nivel" />

      <h1 className={Style.h1Regras}>Regras</h1>
      <div className={Style.Regras}>

          <div className={Style.Livros}>
            <h2 className={Style.h2Livros}>Livros</h2>
              <ul>
                <li> Livros Gratuitos (Dominio publico)
                  <ul>
                    <li>Obras clássicas sem direitos autorais</li>
                    <li>Completas e gratuitas</li>
                  </ul>
                </li>
                <li> Livros Gratuitos (Autores independentes):
                  <ul>
                    <li>Podem ser rascunhos, prévias ou versões completas</li>
                  </ul>
                </li>
                <li> Livros Pagos:
                  <ul>
                    <li>Publicados por autores independentes</li>
                    <li>Requerem pagamento para acesso</li>
                  </ul>
                </li>
              </ul>
          </div>

          <div className={Style.Pontos}>
              <h2 className={Style.h2Pontos}>Pontos</h2>
              <ul>
                <li>Comprando livros pagos:</li>
                <p>Pontos = menor valor entre (Valor do livro/x * 50 e 50)</p>
                <li>Recebendo curtidas nos seus comentários:</li>
                <p>1 curtida = 10 Pontos</p>
                <li>Subindo de nível</li>
                <p>cada nível ganha 25 pontos</p>
              </ul>
          </div>

          <div className={Style.Desconto}>
            <h2 className={Style.h2Desconto}>Desconto</h2>
                <ul>
                  <li>100 pontos = 5% de desconto</li>
                  <li>250 pontos = 10% de desconto </li>
                  <li>500 pontos = 20% de desconto</li>
                  <li>600 pontos = 30% de desconto</li>
                </ul>
          </div>

          <img src="./gatoOculos.png" className={Style.gato} alt="" />
      </div>
    </div>

    <div className={Style.Vantagens}>
      <div className={Style.Bronze}>
        <h2 className={Style.h2Bronze}>Bronze</h2>
        <img src="./Fogo.png" className={Style.FogoB} alt="Fogo" />
        <img src="./Bronze.png" className={Style.MolduraBronze} alt="" />
      </div>

      <div className={Style.Prata}>
        <h2 className={Style.h2Prata}>Prata</h2>
        <img src="./Fogo.png" className={Style.FogoP} alt="Fogo" />
        <img src="./Prata.png" className={Style.MolduraPrata} alt="Prata" />
      </div>

      <div className={Style.Ouro}>
        <h2 className={Style.h2Ouro}>Ouro</h2>
        <img src="./Fogo.png" className={Style.FogoO} alt="Fogo" />
        <img src="./Ouro.png" className={Style.MolduraOuro} alt="Ouro" />
      </div>

      <div className={Style.Platina}>
        <h2 className={Style.h2Platina}>Platina</h2>
        <img src="./Fogo.png" className={Style.FogoPl} alt="Fogo" />
        <img src="./Platina.png" className={Style.MolduraPlatina} alt="Platina" />
      </div>

      <div className={Style.Radiante}>
        <h2 className={Style.h2Radiante}>Radiante</h2>
        <img src="./Fogo.png" className={Style.FogoR} alt="Fogo" />
        <img src="./Radiante.png" className={Style.MolduraRadiante} alt="Platina" />
      </div>

      <img src="./gatoOculos.png" className={Style.gatoVantagens} alt="" />
    </div>
    </>
  )
}

export default Pontos