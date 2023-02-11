import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1)
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}