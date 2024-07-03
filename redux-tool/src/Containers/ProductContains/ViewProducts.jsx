import {Button, Card, Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";
import "./../../Styling/displayProduct.css"

const ViewProducts = () => {
    const products = useSelector((state) => state.productsState.products);
    return (
        <div id="display-page" className="product-container">
            {(products.length > 0) ?
                products.map((record) => {
                    return (
                        <Button className="product-col" key={record.id} onClick={() => console.error("we are doing great.")}>
                            <Card id="product-card">
                                <Card.Img variant="top" src={record.image} id="product"/>
                                <Card.Body id="card-body">
                                    <Card.Title id="title">{record.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                    );
                }) :
                <h2>Loading... <Spinner animation="border"/></h2>}
        </div>);
}

export default ViewProducts;