//Crie um componente que será um auxiliar para que saibamos em qual passo estamos

function Passos({passoAtual}) {
    return (
        <div className="col-12 bg bg-secondary">
            <h1>Passo {passoAtual}</h1>
        </div>
    );
   
}
export default Passos;