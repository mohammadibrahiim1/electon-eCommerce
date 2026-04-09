import { baseApi } from "../../../../features/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: params,
      }),
      providingTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
