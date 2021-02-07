import { createSelector } from '@reduxjs/toolkit';

export const getEntities = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getEntities, getFilter],
  (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
},
);

// export const getVisibleContacts = state => {
//     const contacts = getItems(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
// };