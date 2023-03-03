// import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contacts/contacts-slice';
// import { filterSlice } from './filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
