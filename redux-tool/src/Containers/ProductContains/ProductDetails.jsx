import {useParams} from "react-router-dom";
import {FetchProduct} from "../BackendUtils/FetchProduct.js";
import {useDispatch, useSelector} from "react-redux";
import {selectProduct} from "../../redux/actions/productsActions.js";
import {useEffect} from "react";
import {Card} from "react-bootstrap";
import "./../../Styling/ViewProduct.css";

const ProductDetails = () => {
    const product = useSelector((state) => state.productState.product);
    const {title, price, description, category, image, rating} = product;
    const { productId} = useParams();
    const dispatch = useDispatch();

    const fetchProduct = () => {
        FetchProduct(`https://fakestoreapi.com/products/${productId}`).then((response) => {
            dispatch(selectProduct(response.data));
        }).catch((error) => {
            console.log("error", error.response.data);
        });
    }

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    return(<div>
        <Card>
            <Card.Img src={image} id={"product-image"} />
            <Card.Title>{title}</Card.Title>
            <Card.Body>

            </Card.Body>
        </Card>
        </div>);
}

export default ProductDetails;