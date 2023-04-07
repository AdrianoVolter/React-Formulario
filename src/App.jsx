import DadosPessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
//import { BrowserRouter} from "react-router-dom"
import { useState } from "react"
//import { Container } from "react-bootstrap"


//Forulario cadastro de usuario , Dados pessoais, Dados de endereço, Agradecimento

// useState uma variável para guardar a informação do passo atual
const [passoAtual, setPassoAtual] = useState(0)

function mudarPasso(passo, evento) {
  evento.preventDefault()
  setPassoAtual(passo)

}


function App() {
  
  const passos = [
    <DadosPessoais aoEnviar={mudarPasso} />,  
    <Endereco aoEnviar={mudarPasso} />,
    <Agradecimento aoEnviar={mudarPasso} /> 
  ]



  return (
    <div className="app">
      <div>
            <form>
                // aqui vai a regra para exibir o componente do passo atual
                {passos[passoAtual]}


            </form>
              <button 
                onClick={(evento) => mudarPasso(passoAtual - 1, evento)}
              >
                Voltar
              </button>
              <button
                onClick={(evento) => mudarPasso(passoAtual + 1, evento)}
              >
                Próximo
              </button>
        </div>

    </div>
  )
}

export default App
