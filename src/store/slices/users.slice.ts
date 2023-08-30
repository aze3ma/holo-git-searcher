import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { Loading, User } from '../../constants';
import { searchUsers } from '../actions';

type UsersState = {
    users: User[];
    loading: Loading;
    error?: SerializedError;
};

const initialState: UsersState = {
    users: [],
    loading: Loading.INITIAL,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUsersValues: (state) => {
            state.users = [];
        },
    },
    extraReducers(builder) {
        builder.addCase(searchUsers.pending, (state) => {
            state.loading = Loading.PENDING;
        });
        builder.addCase(searchUsers.rejected, (state, action) => {
            state.loading = Loading.REJECTED;
            state.error = action.error;
        });
        builder.addCase(searchUsers.fulfilled, (state, action) => {
            state.loading = Loading.FULFILLED;
            state.users = action.payload.items;
        });
    },
});

export const { resetUsersValues } = userSlice.actions;
export default userSlice.reducer;
