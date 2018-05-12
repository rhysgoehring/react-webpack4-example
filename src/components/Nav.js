import React from 'react';

import styled, { css } from 'styled-components';

import { RED } from '../styles/';

const Nav = styled.nav`
  display: fixed;
  overflow: hidden;
  background-color: black;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  p {
    display: inline-block;
    color: ${RED};
    font-family: 'Bebas Neue';
    font-size: 50px;
    letter-spacing: 3px;
    padding: 0px !important;
    margin: 0px !important;
  }
`;

// const

const Button = styled.button`
  align-content: center;
  color: white;
  cursor: pointer;
  background-color: #e50914;
  line-height: normal;
  padding: 10px 17px;
  font-weight: 100;
  border: transparent;
  border-radius: 3px;
  font-size: 16px;
  text-decoration: one;

  ${props =>
    props.right &&
    css`
      float: right;
    `} &:hover {
    background-color: #e53935;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <p>FLIXFINDER</p>
    </Nav>
  );
};

export default Navigation;
