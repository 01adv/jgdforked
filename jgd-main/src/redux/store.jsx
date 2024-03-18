import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/ProductAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (mid) => [...mid(), productAPI.middleware],
});
