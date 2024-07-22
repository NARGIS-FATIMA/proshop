import { UPLOAD_URL, PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({keyword, pageNumber}) => ({
        url: PRODUCTS_URL,
        params: { 
          keyword,
          pageNumber, 
        }
      }),
      // providesTags: ['Products'],
      keepUnusedDataFor: 5,
      
    }),
    getProductDetails: builder.query({
      query: (productId) => 
        ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ( data ) => ({
        url: `${PRODUCTS_URL}/${data?.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['product'],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productID) => ({
        url: `${PRODUCTS_URL}/${productID}`,
        method: 'DELETE',
      
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product']
    }),
  }),
});

export const { 
    useGetProductsQuery, 
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation,
 } =
  productsApiSlice;
