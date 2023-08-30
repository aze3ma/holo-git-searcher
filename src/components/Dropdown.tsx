import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

type DropdownProps = {
    options: string[];
    value: string;
    onChange?: (selectedValue: string) => void;
};

const DropdownContainer = styled.select`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: block;
    min-width: 200px;
    padding: 8px;
    padding-right: 32px;
    border: 1px solid ${theme.colors.textMuted};
    border-radius: 4px;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-size: 1rem;
    color: ${theme.colors.textSecondary};
`;

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
    const ref = useRef<HTMLSelectElement>(null);
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
        ref.current?.blur();
    };

    return (
        <DropdownContainer ref={ref} value={value} onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </DropdownContainer>
    );
};

export default Dropdown;
