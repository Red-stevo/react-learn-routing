import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../BackendUtils/FetchProducts.js";
import {setProducts} from "../../redux/actions/productsActions.js";
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

    return(<ViewProducts/>);
}

export default ProductsDisplay;