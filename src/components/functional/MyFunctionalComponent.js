import { useState } from "react";


export default function MyFunctionalComponent({title, onBtnClicked}){

    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count +1);
    }

    return(
        <>
            <div>{title}</div>
            <button onClick={onBtnClicked}>Some Button</button>
            <button onClick={increaseCount}>Count: {count}</button>
        </>
    )
}
