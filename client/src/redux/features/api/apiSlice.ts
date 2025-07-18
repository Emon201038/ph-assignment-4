import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ph-assignment-4.onrender.com/api' }),

  endpoints: () => ({}),
});
