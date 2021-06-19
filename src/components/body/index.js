import React from "react";
import styled from "styled-components";
import { Header } from './../header';
import lastPostsHtml from "./../../blog/last_posts.html";
import { name, socialLinks} from "./../../profile.json";
import { Biography } from './biography';
import { SocialArea } from './social-area';
import { black, themeColor } from "../../styleguide/colors";

export const StyledContent = styled.main`
  text-align:center;
  margin-bottom: 100px;
  padding:0 1rem;
`

export const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: calc(100% - (300px + 100px));
  `

export const UserProfile = () =>
(
  <React.Fragment>
    <Header />
    <Wrapper>
      <StyledContent>
        <h1 className="highlighted">{name}</h1>
        <p className="highlighted">Software Engineer </p>
        <Biography />
        <div dangerouslySetInnerHTML={{__html: lastPostsHtml}} />
        <SocialArea socialLinks={socialLinks}/>
      </StyledContent>
    </Wrapper>
  </React.Fragment>
)
