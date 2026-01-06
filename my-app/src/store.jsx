import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice.jsx";
export const store= configureStore({
    reducer:{
        counter:counterReducer
    }
});