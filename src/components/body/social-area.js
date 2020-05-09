import React from "react";
import styled from "styled-components";
import { themeColor, grayLight } from "../../styleguide/colors";

const StyledSocialArea = styled.div`
  padding: 2rem;
  font-size: 35px;
  margin: 0 auto;
`;

export const StyledMedia = styled.a.attrs({
  rel:"noreferrer",
  role:"link",
  target:"_blank"
})`
  margin: 0 .5rem;
  &:active,
  &:link,
  &:visited {
    color: ${grayLight};
    text-decoration: none;
    outline: none;
  }
  &:hover {
    color: ${themeColor};
    cursor: pointer;
  }
`;

export const SocialArea = ({ socialLinks }) => (
  <StyledSocialArea>
    {socialLinks.map(({ icon, link, name }) => (
      <StyledMedia
        title={name}
        key={name}
        className={`icon fa ${icon}`}
        href={link}
      />
    ))}
  </StyledSocialArea>
);
