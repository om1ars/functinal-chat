import { configureStore } from "@reduxjs/toolkit";
import reducers from ".";

const store = configureStore({
    reducer: reducers
})