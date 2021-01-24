import React from 'react'
import styled from 'styled-components'
import { themeColor } from '../../styleguide/colors';
import { Link } from 'react-router-dom';

const StyledProfileImage = styled.div`
  height: 270px;
  width: 270px;
  box-shadow: 0 1px 3px rgba(246,38,88,0.12), 0 1px 2px rgba(246,38,88,0.24);
  border-radius:50%;
  position:absolute;
  margin:0 auto;
  left:0;
  right: 0;
  padding:5px;
  border:solid 7px ${themeColor};
  top:30%;

  @media screen and (max-width:500px){
    height: 140px;
    width: 140px;
    border-width: 3px;
    top:60%;
  }

  >.image{
    border-radius:50%;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    background-image: url(${props => props.imageUrl});
    height: 100%;
    width: 100%;
  }
`

export const ProfileImage = props =>
  (
    <Link to="/">
        <StyledProfileImage {...props}>
          <div role="img" aria-label="Profile photo" className="image"></div>
        </StyledProfileImage>
    </Link>
  )
