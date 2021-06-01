import React from 'react';
import styled from 'styled-components';
import { gray, themeColor } from '../../styleguide/colors';
import { mobileScreenSize } from '../../styleguide/breakpoints';

const Highlighted = styled.span`
  color: ${themeColor};
  font-weight:bold;
  `;

const StyledBiography = styled.p`
  color: ${gray};
  @media screen and (min-width:${mobileScreenSize}){
    max-width: 900px;
  }
  margin: 0 auto;
`

export const Biography = () => (
  <StyledBiography>
    <br/>
    Born in 2000, work in tech ever since 2018.
    <br/>
    <br/>
    I like a lot of stuff, which include: <Highlighted>Linguistics</Highlighted> and <Highlighted>React</Highlighted>.
    <br/>

  </StyledBiography>
  )
