import React from "react";
import styled from 'styled-components';
import { grayLight, themeColor } from '../../styleguide/colors';

export const StyledLink = styled.a`
  color: ${grayLight};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: ${themeColor};
  }

`

const Container = styled.div`
    display: flex;
    align-items: center;
    > * {
        height: 14px;
    }
`

export const DesignCredits = ({ content, link, arialLabel }) => (
  <Container>
      <span>
        Design by:&nbsp;
    </span>
    <StyledLink target="_blank" rel="noreferrer"role="link" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </Container>
);
