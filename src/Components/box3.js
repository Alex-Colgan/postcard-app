import { useState } from "react";

function Box3 (props) {
    const {children} = props;
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    }
    return (
        <div>
            <h3 className="counter">React Counter</h3>
            <span className="counterOutput">{counter}</span>
            <button className="control_btn" onClick={increase}>+</button>
            {children}
        </div>
    )
}
export default Box3;