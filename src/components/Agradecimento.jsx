// Crie um componente que mostrará uma mensagem agradecendo pelo cadastro e um input do tipo select para receber a informação sobre onde o cliente conheceu a nossa loja.

// As opções serão as seguintes:

// Pelo seguinte
// Pelo LinkedIn
// Pelo Instagram
// Use o bootstrap para criar o select.
import { Card, Container } from "react-bootstrap";

function Agradecimento() {
    return (
        <Container className="col-6 bg bg-secondary">
            <Card>
                <Card.Body>
                    <Card.Title>Obrigado por se cadastrar!</Card.Title>
                    <Card.Text>
                        <p>Como você nos conheceu ?</p>
                        <select>
                            <option value="Pelo seguinte">Pelo seguinte</option>
                            <option value="Pelo LinkedIn">Pelo LinkedIn</option>
                            <option value="Pelo Instagram">Pelo Instagram</option>
                        </select>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
    }

    export default Agradecimento;