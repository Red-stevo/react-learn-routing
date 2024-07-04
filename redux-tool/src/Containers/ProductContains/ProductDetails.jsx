import {useParams} from "react-router-dom";
import {FetchProduct} from "../BackendUtils/FetchProduct.js";
import {useDispatch, useSelector} from "react-redux";
import {selectProduct} from "../../redux/actions/productsActions.js";

const ProductDetails = () => {
    const product = useSelector((state) => state);
    const { productId} = useParams();
    const dispatch = useDispatch();

    const fetchProduct = () => {
        FetchProduct("").then((response) => {
            dispatch(selectProduct(response.data));
        }).catch((error) => {
            console.log("error", error.response.data);
        })
    }

    return(<>

        </>);
}

export default ProductDetails;