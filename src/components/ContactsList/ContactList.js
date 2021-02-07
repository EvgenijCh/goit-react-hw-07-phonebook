import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Loader  from '../Loader/Loader';
import PropTypes from 'prop-types'

const ContactListItem = ({contact: {id, name, number}}) => {
  const dispatch = useDispatch();
  return (
    <>
    <li>
      {name}: {number} {''}
      <button type='button'
        onClick={() => dispatch(contactsOperations.handleRemoveContact(id))}
      >delete
      </button>
      </li>
      </>
  );
};

const ContactsList = () => {
  const dispatch = useDispatch();
  const isContactsLoading = useSelector(contactsSelectors.getLoading);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isContactsLoading && <Loader />}
      {contacts.length > 0 && (
        <ul>
          {contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default ContactsList;
