import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectElement value={value} onChange={onChange}>
      {children}
    </SelectElement>
  );
};

const SelectElement = styled.select`
  background: rgba(128, 128, 128, 0.15);
  border-radius: 8px;
  color: #656565;
  border: none;
  padding: 12px 16px;

  &::focus{
    border: 1px solid blue;
  }

  &:hover{
    color: #000000;
  }
`;

export default Select;
