import { ChangeEvent, useEffect } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { EntityType } from '../constants';
import Dropdown from './Dropdown';
import { theme } from '../theme';
import { useAppDispatch, useAppSelector } from '../store';
import { searchRepositories, searchUsers } from '../store/actions';
import { setEntityType, setSearchTerm } from '../store/slices/search.slice';

const Container = styled.div`
    display: flex;
`;

const Input = styled.input`
    padding: 0.5rem 1rem;
    border: 1px solid ${theme.colors.textMuted};
    border-radius: 4px;
    outline: none;
    margin-right: 1rem;
    width: 100%;
    font-size: 1rem;
    color: ${theme.colors.textSecondary};
`;

const DEBOUNCE_TIME = 1000;
export const MIN_SEARCH_VALUE = 2;

const Search = () => {
    const dispatch = useAppDispatch();
    const { searchTerm, entityType } = useAppSelector((state) => state.search);
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        dispatch(setSearchTerm({ searchTerm: value }));
    };

    useEffect(() => {
        const debounced = debounce(() => {
            console.log('Search term:', searchTerm);
            if (searchTerm && searchTerm.length > MIN_SEARCH_VALUE && entityType === EntityType.USERS)
                dispatch(searchUsers({ searchTerm }));
            if (searchTerm && searchTerm.length > MIN_SEARCH_VALUE && entityType === EntityType.REPOSITORIES)
                dispatch(searchRepositories({ searchTerm }));
        }, DEBOUNCE_TIME);

        debounced();

        return () => {
            debounced.cancel();
        };
    }, [dispatch, searchTerm, entityType]);

    return (
        <Container>
            <Input type="text" onChange={handleSearchChange} placeholder="Start typing to search.." />
            <Dropdown
                options={Object.values(EntityType)}
                value={entityType}
                onChange={(value) => {
                    dispatch(setEntityType({ entityType: value as EntityType }));
                }}
            />
        </Container>
    );
};

export default Search;
