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
    <br/>
    <br/>
    I was born in 2000, and I work with software (professionally) ever since 2018.
    <br/>
    <br/>
    I like a lot of stuff, which include:{' '}
    <Highlighted>Linguistics</Highlighted>;{' '}
    <Highlighted>Distributed Systems</Highlighted>;{' '}
    <Highlighted>Functional Programming</Highlighted>;{' '}
    <Highlighted>React</Highlighted>.

    <br/>
    <br/>
    I study <Highlighted>Computer Science</Highlighted>
    {` `}at <StyledLink
        href="http://www.furb.br/web/10/portugues"
        target="_blank"
        rel="noreferrer"
        role="link"
        arial-label="Where I study at">
          <Highlighted>
            FURB
          </Highlighted>
      </StyledLink>.

  </StyledBiography>
  )
