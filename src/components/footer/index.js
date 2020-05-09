import React from 'react';
import styled from 'styled-components';
import { grayLight } from '../../styleguide/colors';
import { DesignCredits, StyledLink } from './design-credits';
import { MadeWith } from './made-with';

const StyledFooter = styled.footer`
  font-size: 12px;
  margin-top: auto;
  padding: .5rem 0.5rem;
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 5px;
  padding: 0px 10px;
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
    <MadeWith description={
      (<React.Fragment>
        Made with
        <StyledLink rel="noreferrer"role="link" target="_blank" href="https://reactjs.org/" arial-label="react">
        {` React `}
        </StyledLink>
        and
        </React.Fragment>
      )}
      />
  </StyledFooter>);
