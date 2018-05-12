import styled, { css } from 'styled-components';
import { Link } from './Link';
import { maxTablet } from '../../utils/media';

const MenuItem = styled(Link)`
  float: right;

  ${props =>
    maxTablet(props.isHidden ||
        css`
          float: none;
          display: block;
          font-size: 12px;
          letter-spacing: 1px;
          background-color: black;
          &:active {
            background-color: #e6e6e6;
            font-weight: bold;
          }
        `)};
`;

export default MenuItem;
