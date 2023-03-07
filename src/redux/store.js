import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { contactsApi } from './contactsSlice';

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
