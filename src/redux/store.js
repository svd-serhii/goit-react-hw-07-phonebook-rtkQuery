import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter-slice';
import { contactsApi } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
