import {Button, Card} from "react-bootstrap";

const ProductsDisplay = () => {
    return(<>
        <Card style={{ width: '18rem' }} className={"mt-3"}>
        <Card.Img variant="top" src="holder.js/200px200" height={200} width={200} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View</Button>
        </Card.Body>
        </Card>
    </>);
}

export default ProductsDisplay;