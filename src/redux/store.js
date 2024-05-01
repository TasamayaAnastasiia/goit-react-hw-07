import { configureStore} from '@reduxjs/toolkit';
import { contactReducer } from './ContactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  }
});
