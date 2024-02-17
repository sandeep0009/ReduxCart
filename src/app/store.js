import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../featureSlices/cartSlices";

const store=configureStore({
    reducer:{
        'cart':cartSlice.reducer

    }
})

export default store;