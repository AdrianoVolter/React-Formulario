//Crie um componente que será um auxiliar para que saibamos em qual passo estamos
import { SCPasso, SCPassosContainer } from "./Passos.style";



function Passos({passoAtual}) {

    

    return (
        <SCPassosContainer>
            <SCPasso passoAtual={passoAtual} passo={0}>Dados Pessoais</SCPasso>
            <SCPasso passoAtual={passoAtual} passo={1}>Endereço</SCPasso>
            <SCPasso passoAtual={passoAtual} passo={2}>Agradecimento</SCPasso>
        </SCPassosContainer>
        
    );
   
}
export default Passos;