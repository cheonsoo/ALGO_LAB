import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CommonLink from '@/components/common/CommonLink';
import { TITLE } from '@/common/constants';

const StyledDiv = styled.div`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
`;

const StyledSpan = styled.span`
  min-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d9d9d9;
  font-weight: 500;
  margin: 0 20px;
`;

const StyledHeader = styled.div`
  color: #d9d9d9;
  font-weight: 900;
  font-size: 25px;
  padding-left: 20px;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC = () => {
  return (
    <StyledDiv>
      <StyledHeader>
        <CommonLink to="/">{TITLE}</CommonLink>
      </StyledHeader>
    </StyledDiv>
  );
};

export default Header;
