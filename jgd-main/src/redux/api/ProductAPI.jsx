import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product`,
  }),
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "all",
    }),
    productDetails: builder.query({
      query: (id) => id,
    }),
    latestProducts: builder.query({
      query: () => "latest",
    }),
    categories: builder.query({
      query: () => "categories",
    }),
  }),
});

export const {
  useAllProductsQuery,
  useProductDetailsQuery,
  useLatestProductsQuery,
  useCategoriesQuery,
} = productAPI;
