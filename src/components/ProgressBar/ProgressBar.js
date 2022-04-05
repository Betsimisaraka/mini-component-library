/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--padding': '0px',
  },
  medium: {
    '--padding': '0px',
  },
  large: {
    '--padding': '4px 4px',
  }
}

const PROGRESS = {
  small: {
    '--height': '8px',
  },
  medium: {
    '--height': '12px',
  },
  large: {
    '--height': '16px',
  }
}

const ProgressBar = ({ value, size }) => {
  const sizeStyle = SIZES[size];
  const progress = PROGRESS[size]

  return (
    <ProgressBarWrapper style={sizeStyle}>
      <ProgressBarElement style={progress}
        role="progressbar" 
        value={value} max="100" 
        aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      </ProgressBarElement>
    </ProgressBarWrapper>
  )
};

const ProgressBarWrapper = styled.div`
  width: 270px;
  padding: var(--padding);  
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
`

const ProgressBarElement = styled.div`
  border-radius: ${props => props.value === 100 ? '4px' : '4px 0px 0px 4px'};
  width: ${props => props.value}%;
  background-color: blue;
  height: var(--height);
`

export default ProgressBar;
