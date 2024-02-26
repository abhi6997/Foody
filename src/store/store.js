import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../features/sideBarSlice.js"
 

 const store = configureStore({
    reducer:sideBarReducer
})

export default store;