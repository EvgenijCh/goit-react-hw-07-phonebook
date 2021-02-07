import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000";

const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

const handleAddContact = (name, number) => {
    return axios.post('/contacts', name, number).then(({ data }) => data);
};

const handleRemoveContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};

const exportModule = {
  fetchContacts,
  handleAddContact,
  handleRemoveContact,
};

export default exportModule;