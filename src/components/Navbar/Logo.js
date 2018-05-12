import styled from 'styled-components';

import { Link } from './Link';

const Logo = styled(Link)`
  font-family: 'Bebas Neue';
  font-size: 50px;
  font-weight: bold;
  padding: 11px 14px;
  letter-spacing: 3px;
  &:hover {
    color: #f2f2f2;
  }
`;

export default Logo;
