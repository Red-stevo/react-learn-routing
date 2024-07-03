import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../BackendUtils/FetchProducts.js";
import {setProducts} from "../../redux/actions/productsActions.js";
import "./../../Styling/displayProduct.css"
import ViewProducts from "./ViewProducts.jsx";


const ProductsDisplay = () => {
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

    return(<div>
        <ViewProducts />
        <ViewProducts />
        <ViewProducts />
        <ViewProducts />
        </div>);
}

export default ProductsDisplay;