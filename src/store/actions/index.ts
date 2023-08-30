import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/APIClient';

export const searchUsers = createAsyncThunk(
    'users/searchUsers',
    async ({ searchTerm, page = 1 }: { searchTerm: string; page?: number }) => {
        const response = await API.get(`/users?q=${searchTerm}&page=${page}`);

        return await response.data;
    }
);

export const searchRepositories = createAsyncThunk(
    'repositories/searchRepositories',
    async ({ searchTerm, page = 1 }: { searchTerm: string; page?: number }) => {
        const response = await API.get(`/repositories?q=${searchTerm}&page=${page}`);

        return await response.data;
    }
);
