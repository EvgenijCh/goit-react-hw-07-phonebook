import { createReducer, combineReducers } from "@reduxjs/toolkit";
import contactsOperations from './contact-operation';
import { handleFilterChange } from "./contact-actions";


const filter = createReducer('', {
  [handleFilterChange]: (_, { payload }) => payload,
});

const entities = createReducer([], {
    [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
    [contactsOperations.handleAddContact.fulfilled]: (state, { payload }) => [...state, payload,],
    [contactsOperations.handleRemoveContact.fulfilled]: (state, action) => {
        return state.filter(({ id }) => id !== action.meta.arg);
},
});

const isLoading = createReducer(false, {
    [contactsOperations.fetchContacts.pending]: () => true,
    [contactsOperations.fetchContacts.fulfilled]: () => false,
    [contactsOperations.fetchContacts.rejected]: () => false,
    [contactsOperations.handleAddContact.pending]: () => true,
    [contactsOperations.handleAddContact.fulfilled]: () => false,
    [contactsOperations.handleAddContact.rejected]: () => false,
    [contactsOperations.handleRemoveContact.pending]: () => true,
    [contactsOperations.handleRemoveContact.fulfilled]: () => false,
    [contactsOperations.handleRemoveContact.rejected]: () => false,
});
const error = createReducer(null, {})

export default combineReducers({
  filter,
  entities,
  isLoading,
  error,
});

