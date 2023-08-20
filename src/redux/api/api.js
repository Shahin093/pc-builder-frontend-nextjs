import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["update"],
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => "/feature",
    }),

    getFeaturesProduct: builder.query({
      query: () => "/featureProduct",
      providesTags: ["update"],
    }),
    updateProduct: builder.mutation({
      query: (id) => ({
        url: `/featureProduct/update-product/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["update"],
    }),
  }),
});

export const {
  useGetFeaturesQuery,
  useGetFeaturesProductQuery,
  useUpdateProductMutation,
} = apiSlice;
