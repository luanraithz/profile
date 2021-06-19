import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, StyledContent } from '../components/body'

const bMark = (title, link, description) => ({ title, link, description })

const BMarkList = [
    bMark("Luke Smith's website", "https://lukesmith.xyz/", "Really good posts"),
    bMark("Not related - (Luke Smith's podcast)", "https://notrelated.xyz/", "Big-brained podcast "),
    bMark("Animagraffs", "https://animagraffs.com/", "Nice visual representantion of engineering stuff (How the engine works is my favorite)"),
    bMark("Jordan Peterson's recommendations", "https://www.jordanbpeterson.com/great-books/")
]

export const Bookmarks = () => {
    return (
    <Wrapper>
      <StyledContent>
        <Link to="/"> Back to home </Link>
        <br />
        <br />
        <h1> My bookmarks (content I like) </h1>

        <br />
        <br />
        <h3 className="secondary"><i>
          There is no pattern, just random stuff I think is worth sharing
          </i>  </h3>
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
        {BMarkList.map(({title, link, description}) => (
            <span key={link} style={{ margin: "3px 0", display: "flex", flexDirection: "column",  textAlign: "center"}}>
            <a href={link} target="_blank"> <b> {title}</b></a>
            <span className="secondary">{description}</span>
          </span>
        ))}
        </div>
      </StyledContent>
    </Wrapper>
    )
}

export const Recommendations = () => {
  return (
    <Wrapper>
      <StyledContent>
        <Link to="/"> Back to home </Link>
        <br />
        <br />
        <h1>
          Product recommendations
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
