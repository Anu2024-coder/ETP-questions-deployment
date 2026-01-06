import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement} from "@reduxjs/toolkit"

function Counter(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Counter value : {count} </h2>
            <button onClick={()=>dispatch(increment())} Increment ></button>
            <button onClick={()=>dispatch(decrement())} Deccrement ></button>
        </div>
    );
}

export default Counter;