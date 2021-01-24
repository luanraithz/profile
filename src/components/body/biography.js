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
    I was born in 2000, and I work with software (professionally) ever since 2018.
    <br/>
    <br/>
    I like a lot of stuff, which include:{' '}
    <Highlighted>Linguistics</Highlighted>;{' '}
    <Highlighted>Functional Programming</Highlighted>;{' '}
    <Highlighted>React</Highlighted>.

    <br/>

  </StyledBiography>
  )
