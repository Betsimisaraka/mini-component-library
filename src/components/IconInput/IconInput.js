import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Styles = {
  small: {
    border: 1,
    iconSize: 16,
    fontSize: 14,
    lineHeight: 16,
    paddingV: 4,
    top: 4
  },
  large: {
    border: 2,
    iconSize: 24,
    fontSize: 18,
    lineHeight: 21,
    paddingV: 8,
    top: 8
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = Styles[size];

  return (
  <Wrapper style={{'--border': styles.border + "px", '--width': width + "px"}}>

    <IconWrapper style={{'--size': styles.iconSize + "px", '--top': styles.top + "px"}}>
      <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
    </IconWrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputElement 
      style={{'--width': width + "px", '--font': styles.fontSize + "px", '--line': styles.lineHeight + "px", '--padding-v': styles.paddingV + "px"}}
      type="text"
      placeholder={placeholder}
    />
  </Wrapper>
  )
};

const Wrapper = styled.div`
  border-bottom: var(--border) solid black;
  position: relative;
  width: max-content;
`

const IconWrapper = styled.div`
  position: absolute;
  top: var(--top);
  lef: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`

const InputElement = styled.input`
  outline: none;
  border: none;
  padding: var(--padding-v) 0rem var(--padding-v) 2rem; 
  font-weight: 700;
  font-size: var(--font);
  line-height: var(--line);
  color: ${COLORS.gray700};
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    font-size: var(--font);
    line-height: var(--line);
    color: ${COLORS.gray500}; 
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    border: 2px solid ${COLORS.black};
  }

`

export default IconInput;
