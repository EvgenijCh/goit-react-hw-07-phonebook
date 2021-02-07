import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';


const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={event => dispatch(contactsActions.handleFilterChange(event.currentTarget.value))}
    />
  );
};

export default Filter;
