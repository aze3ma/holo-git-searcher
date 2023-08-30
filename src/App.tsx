import { styled } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './theme/globalStyles';
import Search, { MIN_SEARCH_VALUE } from './components/Search';
import Card from './components/Card';
import GridContainer from './components/Grid';
import { useAppDispatch, useAppSelector } from './store';
import { useEffect } from 'react';
import { EntityType } from './constants';
import { resetUsersValues } from './store/slices/users.slice';
import { resetRepositoriesValues } from './store/slices/repositories.slice';
import InfiniteScroll from './components/InfiniteScroll';
import { searchRepositories, searchUsers } from './store/actions';
import { nextPage } from './store/slices/search.slice';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    max-width: 1320px;
    margin: 0 auto;
    height: 100vh;
    overflow: hidden;
    header,
    #grid {
        margin: 2rem 0;
    }
`;

const App = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.users);
    const { repositories } = useAppSelector((state) => state.repositories);
    const { searchTerm, entityType, page } = useAppSelector((state) => state.search);

    useEffect(() => {
        if (!searchTerm || searchTerm.length < MIN_SEARCH_VALUE) {
            if (entityType === EntityType.USERS) dispatch(resetUsersValues());
            if (entityType === EntityType.REPOSITORIES) dispatch(resetRepositoriesValues());
        }
    }, [dispatch, entityType, searchTerm]);

    const fetchNextPage = () => {
        dispatch(nextPage());

        if (searchTerm && entityType === EntityType.USERS) dispatch(searchUsers({ searchTerm, page }));
        if (searchTerm && entityType === EntityType.REPOSITORIES) dispatch(searchRepositories({ searchTerm, page }));
    };

    const renderSelectedEntity = () => {
        if (entityType === EntityType.USERS) {
            return users?.length
                ? users.map((user) => (
                      <Card key={user.id} title={user.login} content={user.type} imageUrl={user.avatar_url} />
                  ))
                : null;
        } else {
            return repositories?.length
                ? repositories.map((repository) => (
                      <Card
                          key={repository.id}
                          title={repository.full_name}
                          content={repository.description}
                          imageUrl="/repository.png"
                      />
                  ))
                : null;
        }
    };

    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Search />
            <InfiniteScroll trigger={fetchNextPage}>
                <GridContainer id="grid" columns={4} gap="1rem">
                    {renderSelectedEntity()}
                </GridContainer>
            </InfiniteScroll>
        </Container>
    );
};

export default App;
