import { createAsyncThunk } from '@reduxjs/toolkit';
import phonebookAPI from 'services/phonebookAPI';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';


export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await phonebookAPI.fetchContacts();
            return contacts;
        }
        catch (error) {
            return rejectWithValue(error);
        }
  },
);

export const handleAddContact = createAsyncThunk('contacts/handleAddContact',
  async ({name, number}, { rejectWithValue }) => {
    try {
      const data = await phonebookAPI.handleAddContact({name, number});
      return data;

    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);     

export const handleRemoveContact = createAsyncThunk(
  'contacts/handleRemoveContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookAPI.handleRemoveContact(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const exportModule = {
  handleAddContact,
  fetchContacts,
  handleRemoveContact,
};
    

export default exportModule