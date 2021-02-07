import { createAction } from '@reduxjs/toolkit'

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const handleAddContactRequest = createAction('contacts/handleAddContactRequest');
export const handleAddContactSuccess = createAction('contacts/handleAddContactSuccess');
export const handleAddContactError = createAction('contacts/handleAddContactError');

export const handleRemoveContactRequest = createAction('contacts/handleRemoveContactRequest');
export const handleRemoveContactSuccess = createAction('contacts/handleRemoveContactSuccess');
export const handleRemoveContactError = createAction('contacts/handleRemoveContactError');

export const handleFilterChange = createAction('app/handleFilterChange');


// import shortid from 'shortid'

// const handleAddContact = createAction("app/handleAddContact", (name, number) => ({
//   payload: { id: shortid.generate(), name, number },
// }));

// const handleRemoveContact = createAction("app/handleRemoveContact");
// const handleFilterChange = createAction("app/handleFilterChange");

// const exportModule = {
//   handleAddContact,
//   handleRemoveContact,
//   handleFilterChange,
// };

// export default exportModule;