import { BlogPostsResponse, data } from "@/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogPosts = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<BlogPostsResponse, void>({
      query: () => `/blogs`,
    }),
    getSpecificPost: builder.query<data, string>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});
export const { useGetPostsQuery, useGetSpecificPostQuery } = blogPosts;
