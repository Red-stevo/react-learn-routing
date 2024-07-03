import {Card, Col, Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";

const ViewProducts = () => {
    const products = useSelector((state) => state.productsState.products);
    return(
        <>
            {(products.length > 0) ?
                products.map((record) => {
                    return(
                        <Col key={record.id} className={"col-lg-3"}>
                            <Card  className={"mt-3"} id={"product-card"}>
                                <Card.Img variant="top" src={record.image} id={"product"} />
                                <Card.Body id={"card-body"}>
                                    <Card.Title id={"title"}>{record.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }):
                <h2>Loading... <Spinner animation="border" /></h2>}
        </>
    )
}

export default ViewProducts;