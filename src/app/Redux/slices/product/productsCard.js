import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
};

export const getProductsCard = createSlice({
  name: "getProductsCard",
  initialState,
  reducers: {
    getProductsRequest: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getProductsFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getProductsFailure, getProductsSuccess, getProductsRequest } = getProductsCard.actions;

export const fetchProductCard = () => async (dispatch) => {
  dispatch(getProductsRequest());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductsSuccess(response.data));
  } catch {
    dispatch(getProductsFailure());
  }
};

export default getProductsCard.reducer;
