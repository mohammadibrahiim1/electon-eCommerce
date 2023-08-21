import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products?limit=100",
    }),
  }),
});

export const { useGetProductQuery } = productApi;
