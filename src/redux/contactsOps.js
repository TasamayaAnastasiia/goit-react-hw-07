import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(`https://663226b6c51e14d695638553.mockapi.io/contacts`);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkApi) => {
        try {
            const response = await axios.post(`https://663226b6c51e14d695638553.mockapi.io/contacts`, contactData);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`https://663226b6c51e14d695638553.mockapi.io/contacts/${id}`);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
