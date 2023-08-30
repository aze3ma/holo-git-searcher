import styled from 'styled-components';
import { theme } from '../theme';

type CardProps = {
    title: string;
    content: string;
    imageUrl?: string;
};

const CardContainer = styled.div`
    background-color: ${theme.colors.backgroundDark};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 16px;
    transition: box-shadow 0.3s ease-in-out;
    width: calc(25% - 3rem);
    &:hover {
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 768px) {
        width: calc(50% - 3rem);
    }
`;

const CardTitle = styled.h2`
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    color: ${theme.colors.text};
    word-wrap: break-word;
`;

const CardContent = styled.p`
    font-size: 0.75rem;
    color: ${theme.colors.textSecondary};
    margin: 0;
    word-wrap: break-word;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardImage = styled.img`
    max-height: 2rem;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 0.5rem;
`;

const Card = ({ title, content, imageUrl }: CardProps) => {
    return (
        <CardContainer>
            <CardImage src={imageUrl} alt={title} />
            <FlexWrapper>
                <CardTitle>{title}</CardTitle>
                <CardContent>{content}</CardContent>
            </FlexWrapper>
        </CardContainer>
    );
};

export default Card;
