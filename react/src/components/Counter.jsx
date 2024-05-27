import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/counterStore.js";

const Counter = () => {
    const value = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{value.count}</h1>
            <button onClick={() => {dispatch(increment())}}>+</button>
            <button onClick={() => {dispatch(decrement())}}>-</button>
        </div>
    );
};

export default Counter;