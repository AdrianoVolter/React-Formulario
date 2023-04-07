import DadosPessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
//import { BrowserRouter} from "react-router-dom"
import { useState } from "react"
//import { Container } from "react-bootstrap"


//Forulario cadastro de usuario , Dados pessoais, Dados de endereço, Agradecimento

// useState uma variável para guardar a informação do passo atual
//const [passoAtual, setPassoAtual] = useState(0)

// function mudarPasso(passo, evento) {
//   evento.preventDefault()
//   setPassoAtual(passo)

// }


function App() {
  return (
      <div className="app">
        <header>
          <h2>Cadastre-se gratuitamente!</h2>
          <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
        </header>
          <div>
              <form>
                  // aqui vai a regra para exibir o componente do passo atual
              </form>
          </div>
      </div>
      )
  }
  
  export default App