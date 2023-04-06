// import Dadospessoais from "./components/DadosPessoais"
// import Endereco from "./components/Endereco"
// import Agradecimento from "./components/Agradecimento"
//import { BrowserRouter} from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"

//Forulario cadastro de usuario , Dados pessoais, Dados de endereço, Agradecimento


function App() {
  

  return (
    <Container className="col-6 ">
      <h1>Cadastre-se Gratuitamente</h1>
      <Outlet />
    </Container>
  )
}

export default App
