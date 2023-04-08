import DadosPessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import Passos from "./components/Passos"



//Forulario cadastro de usuario , Dados pessoais, Dados de endereço, Agradecimento

// useState uma variável para guardar a informação do passo atual
//const [passoAtual, setPassoAtual] = useState(0)

// function mudarPasso(passo, evento) {
//   evento.preventDefault()
//   setPassoAtual(passo)

// }


function App() {

  


  return (
      <Container className="col-6 mt-4 ">
        <header>
          <h2>Cadastre-se gratuitamente!</h2>
          <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
        </header>
          <div>
              <Form>
                 <div
                  className="col-6 "
                  
                 >
                  <button className="btn btn-primary m-3"
                  //onClick={(evento) => mudarPasso(0, evento)}
                  >Voltar</button>
                  <button className="btn btn-primary"
                  >Avançar</button>
                 </div>
              </Form>
          </div>
      </Container>
      )
  }
  
  export default App