import {Button, Card, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../BackendUtils/FetchProducts.js";
import {setProducts} from "../../redux/actions/productsActions.js";


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

    return(<>
        {products.length > 0?products.map((record) => {
            return(
                <Card style={{ width: '18rem' }} className={"mt-3"} key={record.id}>
                    <Card.Img variant="top" src="holder.js/200px200" height={200} width={200} />
                    <Card.Body>
                        <Card.Title>{record.title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
            )
            }):
        <h2>Loading... <Spinner animation="border" /></h2>}
    </>);
}

export default ProductsDisplay;