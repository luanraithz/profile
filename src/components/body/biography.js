import React from 'react';
import styled from 'styled-components';
import { gray, themeColor } from '../../styleguide/colors';
import { mobileScreenSize } from '../../styleguide/breakpoints';
import { StyledLink } from '../footer/design-credits';

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
  margin-top: 5px;
`

export const Biography = () => (
  <StyledBiography>
    <Highlighted>Minimalist.</Highlighted>
    <br/>
    <br/>
    I was born in the 2000, and I work with software (professionally) every since 2018.
    <br/>
    <br/>
    I like a lot of stuff, which include:{' '}
    <Highlighted>Linguistics</Highlighted>;{' '}
    <Highlighted>Natural Languages</Highlighted>;{' '}
    <Highlighted>Distributed Systems</Highlighted>;{' '}
    <Highlighted>Functional Programming</Highlighted>;{' '}
    <Highlighted>React</Highlighted>.

    <br/>
    <br/>
    Currently (from 2020 to 2024 I hope) I'm studing <Highlighted>Computer Science</Highlighted>
    {` `}at <StyledLink>
      <Highlighted>
        FURB
      </Highlighted>
      </StyledLink>

  </StyledBiography>
  )
