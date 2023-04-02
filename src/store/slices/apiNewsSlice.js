import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getPolishNews: builder.query({
      query: () =>
        "top-headlines?country=pl&apiKey=87a00c91dbaa41bea38fa97de9c5b603",
    }),
    getNews: builder.query({
      query: (country) =>
        `top-headlines?country=${country}&apiKey=87a00c91dbaa41bea38fa97de9c5b603`,
    }),
  }),
});

export const { useGetPolishNewsQuery, useGetNewsQuery } = newsApi;
