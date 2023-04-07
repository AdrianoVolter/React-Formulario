//form do bootstrap
import {  Container, Form } from 'react-bootstrap';


function Dadospessoais(){

    



    return(
        <Container className='col-6 bg-secondary '>
            <Form> <br />
                <h1>Dados Pessoais</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <br />
            </Form>
        </Container>
    )
}

export default Dadospessoais;