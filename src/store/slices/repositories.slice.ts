import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { Loading, Repository } from '../../constants';
import { searchRepositories } from '../actions';

type RepositoriesState = {
    repositories: Repository[];
    loading: Loading;
    error?: SerializedError;
};

const initialState: RepositoriesState = {
    repositories: [],
    loading: Loading.INITIAL,
};

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        resetRepositoriesValues: (state) => {
            state.repositories = [];
        },
    },
    extraReducers(builder) {
        builder.addCase(searchRepositories.pending, (state) => {
            state.loading = Loading.PENDING;
        });
        builder.addCase(searchRepositories.rejected, (state, action) => {
            state.loading = Loading.REJECTED;
            state.error = action.error;
        });
        builder.addCase(searchRepositories.fulfilled, (state, action) => {
            state.loading = Loading.FULFILLED;
            state.repositories = action.payload.items;
        });
    },
});
export const { resetRepositoriesValues } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
