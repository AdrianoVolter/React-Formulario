import Dadospessoais from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"

//Forulario cadastro de usuario , Dados pessoais, Dados de endereço, Agradecimento


function App() {
  

  return (
    <div className="App">
      <Dadospessoais/>
      <Endereco/>
      <Agradecimento/>
    </div>
  )
}

export default App
