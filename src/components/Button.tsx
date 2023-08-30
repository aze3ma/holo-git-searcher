import styled from 'styled-components';

type ButtonProps = {
    variant: 'primary' | 'secondary' | 'disabled';
    onClick: () => void;
};

const Button = styled.button<ButtonProps>`
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;

    ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return {
                    background: 'blue',
                    color: 'white',
                };
            case 'secondary':
                return {
                    background: 'gray',
                    color: 'black',
                };
            case 'disabled':
                return {
                    opacity: 0.5,
                    cursor: 'default',
                };
            default:
                return {};
        }
    }}
`;

export default Button;
