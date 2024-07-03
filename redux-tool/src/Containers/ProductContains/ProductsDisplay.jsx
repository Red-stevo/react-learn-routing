import {Button, Card, Col, Container, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../BackendUtils/FetchProducts.js";
import {setProducts} from "../../redux/actions/productsActions.js";
import "./../../Styling/displayProduct.css"


const ProductsDisplay = () => {
    const products = useSelector((state) => state.productsState.products);
    const dispatch = useDispatch();

    const saveProducts = () => {
        console.log("request.");
        fetchProducts().then((response) => {
            console.log("request.");
            dispatch(setProducts(response.data));
        }).catch(error => {
            console.error(error.response)
        })
    }

    useEffect(() => {
        saveProducts();
    }, []);

    return(<div  id={"display-page"}>
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
    </div>);
}

export default ProductsDisplay;