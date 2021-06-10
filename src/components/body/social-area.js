import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeColor, grayLight } from "../../styleguide/colors";

const StyledSocialArea = styled.div`
  padding: 2rem;
  font-size: 35px;
  margin: 0 auto;
`;

export const StyledDiv = styled.span`
  margin: 0 .5rem;
  color: ${grayLight};
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
    {socialLinks.map(({ link, name }) => (
      <a
        title={name}
        rel="noreferrer"
        role="link"
        target="_blank"
        key={name}
        href={link}
      >
        | { name} |
      </a>
    ))}
    <a title="products" href="/product-recommendations">| Products I like |</a>
  </StyledSocialArea >
);
