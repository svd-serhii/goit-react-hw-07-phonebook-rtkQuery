import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63f90c1ac98167fcb469dc5f.mockapi.io/api',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = contactsApi;

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [addContact.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addContact.fulfilled]: (state, action) => {
//       if (state.items.find(({ name }) => name === action.payload.name)) {
//         return alert(`${action.payload.name} is already in contacts.`);
//       }
//       state.items.unshift(action.payload);
//       state.isLoading = false;
//       state.error = null;
//     },
//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [deleteContact.rejected]: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteContact.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });
