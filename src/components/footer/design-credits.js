import React from "react";
import styled from 'styled-components';
import { grayLight } from '../../styleguide/colors';

const StyledLink = styled.a`
  color: ${grayLight};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

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
    <StyledLink rel="noreferrer"role="link" href={link} arial-label={arialLabel}> {content} </StyledLink>
  </Container>
);
