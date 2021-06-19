import React from 'react';
import styled from 'styled-components';
import { gray, themeColor } from '../../styleguide/colors';
import { mobileScreenSize } from '../../styleguide/breakpoints';

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
    Most of my career I worked as a frontend dev, I had a brief experience (a few months) as a SRE.
    <br/>
  </StyledBiography>
  )
