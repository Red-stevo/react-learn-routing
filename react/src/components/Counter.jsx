import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/counterStore.js";

const Counter = () => {
    const counter = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{backgroundColor:"blueviolet"}}>
            here
            <h1>{counter}</h1>
            <button onClick={() => {dispatch(increment())}}>+</button>
            <button onClick={() => {dispatch(decrement())}}>-</button>
        </div>
    );
};

export default Counter;