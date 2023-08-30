import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntityType } from '../../constants';

type SearchState = {
    searchTerm?: string;
    entityType: EntityType;
    page: number;
};

const initialState: SearchState = {
    searchTerm: '',
    entityType: EntityType.USERS,
    page: 1,
};

const searchState = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<{ searchTerm: string }>) => {
            state.searchTerm = action.payload.searchTerm;
        },
        setEntityType: (state, action: PayloadAction<{ entityType: EntityType }>) => {
            state.entityType = action.payload.entityType;
        },
        nextPage: (state) => {
            state.page += 1;
        },
    },
});

export const { setSearchTerm, setEntityType, nextPage } = searchState.actions;
export default searchState.reducer;
