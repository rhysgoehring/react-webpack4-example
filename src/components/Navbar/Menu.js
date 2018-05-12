import React from 'react';
import styled, { css } from 'styled-components';
import { desktop, maxTablet } from '../../utils/media';


const MenuWrapper = styled.div`
  overflow: hidden;
  display: none;

  ${desktop(css`
    display: block;
  `)};

  ${props =>
    maxTablet(props.isHidden ||
        css`
          display: block;
          width: 100%;
          margin-top: 40px;
        `)};
`;


const Menu = (props) => (
  <MenuWrapper isHidden={props.isHidden}>
    {props.children}
  </MenuWrapper>
);

export default Menu;
