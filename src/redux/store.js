import {configureStore} from "@reduxjs/toolkit"
import { adminReducer } from "./reducers/adminReducer";
import { cartReducer} from "./reducers/cartReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        orders:ordersReducer,
        admin : adminReducer
    }
})
export default store;

export const server = "https://backend-btechburgerwala.vercel.app/api/v1"