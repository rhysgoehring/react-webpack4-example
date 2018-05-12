import styled, { css } from 'styled-components';

import { RED } from '../../utils/colors';
import { desktop } from '../../utils/media';

export const Link = styled.a`
  display: inline-block;
  color: ${RED};
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin: 0px 10px;
  font-family: 'Unica One', cursive;

  ${desktop(css`
    &:hover {
      color: #fff;
    }
  `)};
`;
