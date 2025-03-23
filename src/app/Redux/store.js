import { configureStore } from "@reduxjs/toolkit";
import getProductsCard from "./slices/product/productsCard";

export const store = configureStore({
  reducer: {
    getProductsCard,
  },
});
