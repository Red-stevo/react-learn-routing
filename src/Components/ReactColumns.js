import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ReactColumns = () =>
{
    return(
        <Container>
            <Row>
                <Col xs={6}>1 0f 2</Col>
                <Col xs={6}>2 of 2</Col>
            </Row>
            <Row>
                <Col xs={4}>1 0f 3</Col>
                <Col xs={4}>2 of 3</Col>
                <Col xs={4}>3 of 3</Col>
            </Row>
        </Container>);
}

export default ReactColumns;