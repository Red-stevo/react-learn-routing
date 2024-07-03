import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../BackendUtils/FetchProducts.js";
import {setProducts} from "../../redux/actions/productsActions.js";


const ProductsDisplay = () => {
    const products = useSelector((state) => state.productsState.products.products);
    const dispatch = useDispatch();

    const saveProducts = () => {
        fetchProducts().then((response) => {
            dispatch(setProducts(response.data));
        }).catch(error => {
            console.error(error.response)
        })
    }


    useEffect(() => {
        saveProducts();
    }, []);

    return(<>
        {products.length > 0? <Card style={{ width: '18rem' }} className={"mt-3"}>
            <Card.Img variant="top" src="holder.js/200px200" height={200} width={200} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>:
        <h2 className={"display-6 justify-content-center align-content-center flex-column"}>
            There Are No Products At The Moment?</h2>}
    </>);
}

export default ProductsDisplay;