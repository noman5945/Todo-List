import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"], //cache name
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"], //add to cache
    }),
    addTodos: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"], //destroy cache
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/task/${id as string}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"], //destroy cache
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation, useDeleteTodoMutation } =
  baseAPI;
