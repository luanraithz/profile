import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, StyledContent } from '../components/body'

export const Recomendations = () => {
  return (
    <Wrapper>
      <StyledContent>
        <Link to="/"> Back to home </Link>
        <br />
        <br />
        <h1>
          Product recomendations
        </h1>

        <br />
        <br />
        <h3><i>
          Only products that make you less dependent and are really convenient
          </i>  </h3>
        <br />
        <div>
          <span>
            <a href="https://en.wikipedia.org/wiki/Moka_pot" target="_blank"> <b> Moka top</b></a>- <span>Great coffee, no paper, and REALLY convenient. </span>
          </span>
        </div>
      </StyledContent>
    </Wrapper>
  )
}