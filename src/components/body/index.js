import React from "react";
import styled from "styled-components";
import { name, location, biography, socialLinks} from "./../../profile.json";
import { Biography } from './biography';
import { SocialArea } from './social-area';
import { Footer } from '../footer';
import { black, themeColor } from "../../styleguide/colors";

const StyledContent = styled.main`
  text-align:center;
  margin-bottom: 100px;
  padding:0 1rem;
`

const Name = styled.h2`
  color: ${black};
  font-weight:normal;
  text-transform:uppercase;
  `;

const Location = styled.p`
  color: ${themeColor};
  font-weight:bold;
  `;

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - (300px + 100px));
  `

export const UserProfile = () =>
(
  <React.Fragment>
    <Wrapper>
      <StyledContent>
        <Name>{name}</Name>
        <Location>{location}</Location>
        <Biography biography={biography}/>
        <SocialArea socialLinks={socialLinks}/>
      </StyledContent>
      <Footer/>
    </Wrapper>
  </React.Fragment>
)
