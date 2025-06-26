import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: reducer
    }
})