import React from 'react';
import styled from 'styled-components';
import { grayLight } from '../../styleguide/colors';
import { DesignCredits } from './design-credits';
import { MadeWith } from './made-with';

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: .5rem 0.5rem;
  display: flex;
  color: ${grayLight};
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
        margin-bottom: 10px;
    }
  }
`

export const Footer = () => (
  <StyledFooter>
    <DesignCredits
      content=" Juan (Aerea UI Kit)"
      arialLabel="Know more about Juan Valle and Aerea UI Kit"
      link="https://www.behance.net/gallery/36601943/AEREA-FREE-UI-KIT"/>
    <MadeWith description="Made with React and"/>
  </StyledFooter>);
