import styled from 'styled-components';
import { theme } from '../theme';

const HeaderContainer = styled.header`
    display: flex;
    align-items: flex-end;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-size: 1.5rem;
        margin: 0;
        color: ${theme.colors.text};
    }
    p {
        margin: 0;
        color: #e9e9e9e9;
        color: ${theme.colors.textMuted};
    }
`;

const Logo = styled.img`
    max-width: 4rem;
    margin-right: 1.5rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="/logo.png" alt="logo" />
            <FlexWrapper>
                <h1>Github Searcher</h1>
                <p>Search users or repositories below</p>
            </FlexWrapper>
        </HeaderContainer>
    );
};

export default Header;
