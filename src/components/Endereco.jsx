
// Logradouro
// Numero
// Bairro
// Complemento
// Cidade
// CEP
// Estado
import {Container, Form , Button} from 'react-bootstrap';



function Endereco() {
  return (
    <Container className="col-4 ">
      <Form>
        <h1>Endereço</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu logradouro" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Número: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu número" />  
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu bairro" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu complemento" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Cidade: </Form.Label>
          <Form.Control type="text" placeholder="Digite sua cidade" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>CEP: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu CEP" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Estado: </Form.Label>
          <Form.Control type="text" placeholder="Digite seu estado" />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
           <Button variant="primary" type="submit">
            Voltar
          </Button>
          <Button variant="primary" type="submit">
            Avançar
          </Button>
         
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Endereco;