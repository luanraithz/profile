import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import imageUrl from '../../assets/profile.jpg'
import { headerHeight } from '../../styleguide/breakpoints'

const StyledHeader = styled.header`
  position:relative;
  height: ${headerHeight};
`

export const Header = () =>
  (
    <StyledHeader>
      {/* <Background imageUrl={background} /> */}
      <ProfileImage imageUrl={imageUrl} />
    </StyledHeader>
  )
