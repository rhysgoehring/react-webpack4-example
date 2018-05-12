import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './Menu_Item';

import { RED } from '../../utils/colors';

const HeaderContainer = styled.div`
  background: -moz-linear-gradient(left, ${RED}, black, black, black, black, ${RED});
  background: -webkit-linear-gradient(left, ${RED}, black, black, black, black, ${RED});
  background: linear-gradient(to right, ${RED}, black, black, black, black, ${RED});
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

class NavBar extends Component {
  state = {
    isMenuHidden: false,
  };

  render() {
    return (
        <HeaderContainer>
          <Logo href="/">FLIXFINDER</Logo>
          <Menu isHidden={this.state.isMenuHidden}>
            <MenuItem href="/">SIGN IN</MenuItem>
          </Menu>
        </HeaderContainer>
    );
  }
}

export default NavBar;
