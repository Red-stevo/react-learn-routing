import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>

        </div>
    );
};

export default Counter;