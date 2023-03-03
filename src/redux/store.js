import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contacts-slice';
import { filterSlice } from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
