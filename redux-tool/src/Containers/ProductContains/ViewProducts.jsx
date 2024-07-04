import {Button, Card, Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";
import "./../../Styling/displayProduct.css"
import {useNavigate} from "react-router-dom";

const ViewProducts = () => {
    const products = useSelector((state) => state.productsState.products);
    const navigate = useNavigate();
    return (
        <div id="display-page" className="product-container">
            {(products.length > 0) ?
                products.map((record) => {
                    return (
                        <Button className="product-col" key={record.id}
                                onClick={() => navigate("/home/product/"+record.id)}>
                            <Card id="product-card">
                                <Card.Img variant="top" src={record.image} id="product"/>
                                <Card.Body id="card-body">
                                    <Card.Title id="title">{record.title.substring(0, 35)+"..."}</Card.Title>
                                    <Card.Text className={"card-text"}>
                                        <span className={"price"}>${record.price}</span><br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Button>
                    );
                }) :
                <h2>Loading... <Spinner animation="border"/></h2>}
        </div>);
}

export default ViewProducts;