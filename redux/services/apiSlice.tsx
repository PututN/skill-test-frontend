import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllToDo: builder.query({
      query: () => "todos",
    }),
    getPagination: builder.query({
      query: (page) => `todos?_start=${page}&_limit=10`,
    }),
  }),
});

export const { useGetAllToDoQuery, useGetPaginationQuery } = toDoApi;
