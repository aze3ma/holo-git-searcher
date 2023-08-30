import styled from 'styled-components';

type GridProps = {
    columns: number;
    gap: string;
};

const GridContainer = styled.div<GridProps>`
    display: flex;
    /* grid-template-columns: repeat(${(props) => props.columns}, 1fr); */
    gap: ${(props) => props.gap};
    flex-wrap: wrap;
`;

export default GridContainer;
